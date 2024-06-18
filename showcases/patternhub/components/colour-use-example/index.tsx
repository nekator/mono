import {
	DBPopover,
	DBTag,
	DBDivider,
	DBIcon,
	DBLink,
	DBButton,
	DBInput,
	DBCard
} from '../src';
import ColorLabel from './color-label';

export type ColorUseExampleProps = {
	className?: string;
	enableDarkMode?: boolean;
};

const ColorUseExample = ({
	className,
	enableDarkMode
}: ColorUseExampleProps) => {
	return (
		<div className="color-use-example-wrapper">
			<DBCard
				className={
					className + ' color-use-example db-density-expressive'
				}
				data-color-scheme={enableDarkMode ? 'dark' : 'light'}>
				<div className="color-label-wrapper">
					<div className="color-use-example-layout">
						<DBTag emphasis="strong">Tag</DBTag>
						<DBTag emphasis="strong">Tag</DBTag>
					</div>
					<ColorLabel className="color-label-tag-1">
						contrast-high
					</ColorLabel>
					<ColorLabel className="color-label-tag-2">
						on contrast
					</ColorLabel>
				</div>
				<DBDivider />
				<div className="color-use-example-layout align-center">
					<DBIcon
						icon="heart"
						style={{
							color: 'var(--db-current-color-contrast-low-enabled)'
						}}
					/>
					<h3>Headline</h3>
					<ColorLabel>contrast-high</ColorLabel>
				</div>
				<p
					style={{
						color: 'var(--db-current-color-on-bg-weak-enabled)'
					}}>
					Lorem ipsum dolor sit amet,
					<br />
					consetetur sadipscing elitr.
				</p>
				<DBButton variant="filled">Button</DBButton>
				<br />
				<br />
				<DBLink variant="brand">Link</DBLink>
				<br />
				<br />
				<div className="color-use-example-layout">
					<DBInput
						style={{ maxWidth: '200px' }}
						label="Input label"
						value="Example input"
					/>
				</div>
			</DBCard>
			<DBCard elevationLevel="2">
				<div>
					<p>
						<b>Component DBTag</b>
					</p>
					<p>
						current-color variables are used to display colours
						adaptively
					</p>
					<pre className="db-font-size-sm">
						<code>
							{`background: var(--db-current-color-bg-enabled);
color: var(--db-current-color-enabled);`}
						</code>
					</pre>
				</div>
			</DBCard>
		</div>
	);
};

export default ColorUseExample;
