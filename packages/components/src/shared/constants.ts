export const DEFAULT_ID: string = 'OVERWRITE_DEFAULT_ID';
export const DEFAULT_LABEL: string = 'LABEL SHOULD BE SET';

export const DEFAULT_MESSAGE_ID_SUFFIX: string = '-message';
export const DEFAULT_PLACEHOLDER_ID_SUFFIX: string = '-placeholder';

export const DEFAULT_BACK: string = 'Back';

export const DEFAULT_CLOSE_BUTTON: string = 'Close Button';
export const TONALITY_CONST: string = 'tonality';
export const COLOR_CONST: string = 'color';

export enum TONALITY {
	'FUNCTIONAL' = 'functional',
	'REGULAR' = 'regular',
	'EXPRESSIVE' = 'expressive'
}
export const TONALITIES: TONALITY[] = Object.entries(TONALITY).map(
	([, value]) => value
);

export enum COLOR_SIMPLE {
	'PRIMARY' = 'primary'
}

export enum COLOR {
	'BASE_BG_1' = 'base-bg-1',
	'BASE_BG_2' = 'base-bg-2',
	'BASE_BG_3' = 'base-bg-3',
	'BASE_BG_TRANSPARENT_SEMI' = 'base-bg-transparent-semi',
	'BASE_BG_TRANSPARENT_FULL' = 'base-bg-transparent-full',
	'NEUTRAL_BG_1' = 'neutral-bg-1',
	'NEUTRAL_BG_2' = 'neutral-bg-2',
	'NEUTRAL_BG_3' = 'neutral-bg-3',
	'NEUTRAL_BG_TRANSPARENT_SEMI' = 'neutral-bg-transparent-semi',
	'NEUTRAL_BG_TRANSPARENT_FULL' = 'neutral-bg-transparent-full',
	'BRAND_BG_1' = 'brand-bg-1',
	'BRAND_BG_2' = 'brand-bg-2',
	'BRAND_BG_3' = 'brand-bg-3',
	'BRAND_BG_TRANSPARENT_SEMI' = 'brand-bg-transparent-semi',
	'BRAND_BG_TRANSPARENT_FULL' = 'brand-bg-transparent-full',
	'SUCCESSFUL_BG_1' = 'successful-bg-1',
	'SUCCESSFUL_BG_2' = 'successful-bg-2',
	'SUCCESSFUL_BG_3' = 'successful-bg-3',
	'SUCCESSFUL_BG_TRANSPARENT_SEMI' = 'successful-bg-transparent-semi',
	'SUCCESSFUL_BG_TRANSPARENT_FULL' = 'successful-bg-transparent-full',
	'CRITICAL_BG_1' = 'critical-bg-1',
	'CRITICAL_BG_2' = 'critical-bg-2',
	'CRITICAL_BG_3' = 'critical-bg-3',
	'CRITICAL_BG_TRANSPARENT_SEMI' = 'critical-bg-transparent-semi',
	'CRITICAL_BG_TRANSPARENT_Full' = 'critical-bg-transparent-full',
	'WARNING_BG_1' = 'warning-bg-1',
	'WARNING_BG_2' = 'warning-bg-2',
	'WARNING_BG_3' = 'warning-bg-3',
	'WARNING_BG_TRANSPARENT_SEMI' = 'warning-bg-transparent-semi',
	'WARNING_BG_TRANSPARENT_FULL' = 'warning-bg-transparent-full',
	'INFORMATIONAL_BG_1' = 'informational-bg-1',
	'INFORMATIONAL_BG_2' = 'informational-bg-2',
	'INFORMATIONAL_BG_3' = 'informational-bg-3',
	'INFORMATIONAL_BG_TRANSPARENT_SEMI' = 'informational-bg-transparent-semi',
	'INFORMATIONAL_BG_TRANSPARENT_FULL' = 'informational-bg-transparent-full'
}

export const COLORS: COLOR[] = Object.entries(COLOR).map(([, value]) => value);
export const COLORS_SIMPLE: COLOR_SIMPLE[] = Object.entries(COLOR_SIMPLE).map(
	([, value]) => value
);

export enum VARIANT {
	'CRITICAL' = 'critical',
	'INFORMATIONAL' = 'informational',
	'WARNING' = 'warning',
	'SUCCESSFUL' = 'successful'
}

export const VARIANTS: VARIANT[] = Object.entries(VARIANT).map(
	([, value]) => value
);

export const DEFAULT_VIEWPORT = { width: 390, height: 884 };

/**
 * Use those viewports if your component has a css media-query otherwise use the DEFAULT_VIEWPORT
 */
export const TESTING_VIEWPORTS = [
	{ name: 'desktop', width: 1920, height: 1280 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', ...DEFAULT_VIEWPORT }
];
