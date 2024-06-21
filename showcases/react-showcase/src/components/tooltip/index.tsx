import { DBTooltip, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/tooltip.json';
import type { DBTooltipProps } from '../../../../../output/react/src/components/tooltip/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getTooltip = ({
	children,
	width,
	emphasis,
	placement,
	delay,
	content,
	animation,
	variant,
	id
}: DBTooltipProps & { content: string }) => (
	<DBButton describedbyid={id}>
		{children}
		<DBTooltip
			width={width}
			emphasis={emphasis}
			placement={placement}
			animation={animation}
			delay={delay}
			variant={variant}
			id={id}>
			{content}
		</DBTooltip>
	</DBButton>
);

const TooltipComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTooltip"
			variants={getVariants(
				defaultComponentVariants,
				getTooltip,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TooltipComponent;
