import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaButtonProps = {
	iconSmall?: string;
	iconMedium?: string;
	label?: string;
	icon?: boolean;
	interactiveState?: Record<string, string | boolean>;
	size?: string;
	width?: string;
};

// TODO: useMetadata only support json -> we need to fix this in mitosis

/*const buttonProps: Record<string, FigmaProp> = {
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
};

export const outline: FigmaCodeConnect = {
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
};*/
