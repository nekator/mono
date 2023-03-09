import { DBTag } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { type DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [];

const TagComponent = () => {
	return (
		<DefaultComponent
			title={'DBTag'}
			variants={variants}></DefaultComponent>
	);
};

export default TagComponent;
