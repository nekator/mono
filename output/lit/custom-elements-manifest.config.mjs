import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';

import { customElementJetBrainsPlugin } from 'custom-element-jet-brains-integration';

const outdir = './dist';

const vsCodeOptions = {
  outdir,
  cssFileName: null
};

const intellijOptions = {
  outdir,
  excludeCss: true,
  packageJson: false
};

export default {
  globs: ['src'],
  outdir,
  litelement: true,
  plugins: [
    customElementVsCodePlugin(vsCodeOptions),
    customElementJetBrainsPlugin(intellijOptions)
  ]
};
