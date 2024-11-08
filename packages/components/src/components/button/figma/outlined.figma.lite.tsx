import { useMetadata } from '@builder.io/mitosis';
import { DBButton } from '../index';
import { FigmaButtonProps } from './data';

useMetadata({
	figma: {
		name: 'def-button-beta-outlined',
		url: 'https://www.figma.com/design/10jv24ZRzPXXY7vynHF0ht/test%3A-code-connect?node-id=1-4752',
		props: {
			iconSmall: { type: 'instance', key: '📍 Icon Small' },
			iconMedium: { type: 'instance', key: '📍 Icon Medium' },
			label: { type: 'string', key: '✏️ Label' },
			icon: {
				type: 'boolean',
				key: '👁️ Icon',
				value: {
					false: false,
					true: 'placeholder'
				}
			},
			interactiveState: {
				type: 'enum',
				key: 'Interactive State',
				value: {
					'(Def) Enabled': false,
					Hovered: false,
					Pressed: false,
					Focused: false,
					Disabled: 'true'
				}
			},
			size: {
				type: 'enum',
				key: 'Size',
				value: {
					'(Def) Medium': false,
					Small: 'small'
				}
			},
			width: {
				type: 'enum',
				key: 'Width',
				value: {
					'(Def) Auto Width': false,
					'Full Width': 'full'
				}
			}
		}
	}
});

export default function DBFigmaButton(props: FigmaButtonProps) {
	return (
		<DBButton
			icon={props.icon}
			disabled={props.interactiveState}
			width={props.width}
			size={props.size}>
			{props.label}
		</DBButton>
	);
}
