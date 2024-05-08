import { DBCard, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../../shared/default-component-data';
import useUniversalSearchParameters from '../hooks/use-universal-search-parameters';

const VariantList = ({ examples }: DefaultComponentVariants) => (
	<DBCard className="variants-card">
		<div className="variants-list">
			{examples.map((example, exampleIndex) => (
				<div
					key={`${example.name}-${exampleIndex}`}
					style={example.style}
					className={example.className}>
					{example.example}
				</div>
			))}
		</div>
	</DBCard>
);

const DefaultComponent = ({ title, variants }: DefaultComponentProps) => {
	const pageName = useQuery()[4];
	// Const pageName =
	// 	process?.env?.NEXT_SHOWCASE_VARIANT === 'next' ? '' : useQuery()[4];

	if (pageName) {
		const foundVariant = variants.find(
			(variant) => variant.name.toLowerCase() === pageName
		);
		if (foundVariant) {
			return <VariantList {...foundVariant} />;
		}
	}

	const getHref = (variantName: string): string => {
		if (typeof window !== 'undefined') {
			return `${window.location.href}&page=${variantName.toLowerCase()}`;
		}

		return '';
	};

	const openVariantInNewWindow = (
		event: React.MouseEvent<HTMLAnchorElement>,
		variantName: string
	) => {
		event.preventDefault();

		if (window) {
			window.open(
				`${window.location.href}&page=${variantName.toLowerCase()}`,
				'_blank'
			);
		}
	};

	return (
		<div className="default-container">
			<h1>{title}</h1>
			{variants?.map((variant, index) => (
				<div key={`${variant.name}-${index}`}>
					<DBDivider></DBDivider>
					<DBLink
						className="link-headline"
						content="external"
						target="_blank"
						onClick={(event) => {
							openVariantInNewWindow(event, variant.name);
						}}
						href={getHref(variant.name)}>
						{variant.name}
					</DBLink>
					<VariantList {...variant} />
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
