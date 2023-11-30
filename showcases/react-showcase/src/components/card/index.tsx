import { DBCard } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/card.json';
import { getVariants } from '../data';
import type { DBCardProps } from '../../../../../output/react/src/components/card/model';

const getCard = ({ variant, children, spacing }: DBCardProps) => (
	<DBCard variant={variant} spacing={spacing}>
		<strong>{children}</strong>
	</DBCard>
);

const CardComponent = () => {
	return (
		<DefaultComponent
			title={'DBCard'}
			variants={getVariants(
				defaultComponentVariants,
				getCard
			)}></DefaultComponent>
	);
};

export default CardComponent;
