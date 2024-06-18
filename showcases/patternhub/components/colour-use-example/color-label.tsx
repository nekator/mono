import React, { type ReactNode } from 'react';
import { DBTag } from '../src';

export type ColorLabelProps = React.HTMLAttributes<HTMLDivElement> & {
	onClick?: (event: React.MouseEvent) => void;
	children?: ReactNode;
};

const ColorLabel = ({
	onClick,
	children,
	className,
	...rest
}: ColorLabelProps) => {
	return (
		<div
			className={`color-label db-density-functional ${className}`}
			{...rest}>
			<div className="color-label-dash" />
			<DBTag
				emphasis="strong"
				onClick={(event) => {
					if (onClick) {
						onClick(event);
					}
				}}>
				{children}
			</DBTag>
		</div>
	);
};

export default ColorLabel;
