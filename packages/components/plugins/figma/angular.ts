import { Plugin } from '@builder.io/mitosis';
import { getDefaultFigmaPlugin } from './utils';

const angular: Plugin = () =>
	getDefaultFigmaPlugin('angular', 'ngx-components');

export default angular;
