import { type ReplaceInFileConfig } from 'replace-in-file';

export const colorUpdateQ32024: ReplaceInFileConfig[] = [
	// Basic backgrounds
	{
		files: '',
		from: 'bg-lvl-1',
		to: 'bg-basic-level-1'
	},
	{
		files: '',
		from: 'bg-lvl-2',
		to: 'bg-basic-level-2'
	},
	{
		files: '',
		from: 'bg-lvl-3',
		to: 'bg-basic-level-3'
	},
	{
		files: '',
		from: 'bg-transparent-full',
		to: 'bg-basic-transparent-full'
	},
	{
		files: '',
		from: 'bg-transparent-semi',
		to: 'bg-basic-transparent-semi'
	},
	{
		files: '',
		from: 'on-bg-enabled',
		to: 'on-bg-basic-100-default'
	},
	{
		files: '',
		from: 'on-bg-hover',
		to: 'on-bg-basic-100-hovered'
	},
	{
		files: '',
		from: 'on-bg-pressed',
		to: 'on-bg-basic-100-pressed'
	},
	{
		files: '',
		from: 'on-bg-weak-enabled',
		to: 'on-bg-basic-90-default'
	},
	{
		files: '',
		from: 'on-bg-weak-hover',
		to: 'on-bg-basic-90-hovered'
	},
	{
		files: '',
		from: 'on-bg-weak-pressed',
		to: 'on-bg-basic-90-pressed'
	},
	{
		files: '',
		from: 'contrast-low-enabled',
		to: 'on-bg-basic-70-default'
	},
	{
		files: '',
		from: 'color-border',
		// We will replace adaptive-color afterward
		to: 'color-on-bg-basic-60-default'
	},

	// Contrast -> inverted
	{
		files: '',
		from: 'on-contrast-enabled',
		to: 'on-bg-inverted-default'
	},
	{
		files: '',
		from: 'on-contrast-hover',
		to: 'on-bg-inverted-hovered'
	},
	{
		files: '',
		from: 'on-contrast-pressed',
		to: 'on-bg-inverted-pressed'
	},
	{
		files: '',
		from: 'contrast-high-enabled',
		to: 'bg-inverted-contrast-high-default'
	},
	{
		files: '',
		from: 'contrast-high-hover',
		to: 'bg-inverted-contrast-high-hovered'
	},
	{
		files: '',
		from: 'contrast-high-pressed',
		to: 'bg-inverted-contrast-high-pressed'
	},

	// Rest
	{
		files: '',
		from: '-enabled',
		to: '-default'
	},
	{
		files: '',
		// Revert changes back
		from: '-hovereded',
		to: '-hovered'
	},
	{
		files: '',
		from: 'current-color',
		to: 'adaptive'
	}
];
