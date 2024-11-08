import { Plugin } from '@builder.io/mitosis';
import { getDefaultFigmaPlugin } from './utils';

const vue: Plugin = () => getDefaultFigmaPlugin('vue', 'v-components');

export default vue;
