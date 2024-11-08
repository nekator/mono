import { FigmaCodeConnect, FigmaProp } from '../../src/shared/figma';
import { MitosisComponent } from '@builder.io/mitosis';

export const figmaImport: string =
	"import figma, { html } from '@figma/code-connect/html';";

const getProps = (props: Record<string, FigmaProp>): string => {
	return `props: {
	${Object.entries(props)
		.map(([key, fProp]) => {
			return `${key}: figma.${fProp.type}('${fProp.key}'${fProp.value ? `, ${JSON.stringify(fProp.value)}` : ''})`;
		})
		.join(',\n')}
	}`;
};

const propReplacement = (prop: string) => '${props.' + prop + '}';
const getExample = (
	example: string,
	props: Record<string, FigmaProp>
): string => {
	let result = example;
	for (const prop of Object.keys(props)) {
		const replacement = propReplacement(prop);
		result = result
			.replace(`"${prop}"`, `"${replacement}"`)
			// Vue
			.replace(`{{ ${prop} }}`, replacement)
			.replace(`:${prop}`, `${prop}`)
			// Angular
			.replace(`{{${prop}}}`, replacement)
			.replace(`[${prop}]`, `${prop}`);
	}
	return result;
};

const boilerPlateVue = (
	codeConnect: FigmaCodeConnect,
	example: string,
	imports: string[],
	libraryName: string
) => `
${figmaImport}

// ${codeConnect.name}
figma.connect(
  '${codeConnect.url}',
  {
    ${getProps(codeConnect.props)},
    example: (props) =>
      html\`${getExample(example, codeConnect.props)}\`,
    imports: ["import { ${imports.join(', ')} } from '@db-ui/${libraryName}'"]
  }
);`;

export const getDefaultFigmaPlugin = (
	target: 'vue' | 'angular' | 'react' | 'wc',
	libraryName: string
) => {
	let codeStart = '';
	let codeEnd = '';

	if (target === 'vue') {
		codeStart = '<template>';
		codeEnd = '</template>';
	} else if (target === 'angular') {
		codeStart = 'template: `';
		codeEnd = '`,';
	}

	return {
		code: {
			post(code: string, json: MitosisComponent) {
				if (code.includes(figmaImport)) {
					return code;
				}

				if (json.meta?.useMetadata?.figma) {
					const imports: string[] = json.imports
						.filter((imp) => !imp.path.startsWith('./'))
						.reduce((prev, next) => {
							const keys = Object.keys(next.imports);
							return [...prev, ...keys];
						}, []);

					const example = code
						.split(codeStart)
						.pop()
						.split(codeEnd)[0]
						.trim();
					return boilerPlateVue(
						json.meta?.useMetadata?.figma,
						example,
						imports,
						libraryName
					);
				}

				return '';
			}
		}
	};
};
