module.exports = [
	{
		name: 'tab-bar',
		defaultStylePath: 'components/tab-bar/tab-bar.css',
		overwrites: {
			angular: [
				{
					pre: 'convertTabs(tabs) {',
					post: 'convertTabs( tabs:any ) {'
				},
				{ pre: '[key]="tab.name"', post: '' }
			]
		}
	},

	{
		name: 'tab',
		defaultStylePath: 'components/tab-bar/tab-bar.css'
	},

	{
		name: 'button',
		defaultStylePath: 'components/button/button.css'
	},
	{
		name: 'icon',
		defaultStylePath: 'base/css/icon/icons.css'
	}
];
