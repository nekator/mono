## Git commits conventions

We're using [husky git hooks](https://www.npmjs.com/husky) in combination with [commitlint](https://www.npmjs.com/package/@commitlint/cli) according to <https://commitlint.js.org/#/concepts-commit-conventions>:

```
type(scope?): subject
body?
footer?
```

> quote, commitlint documentation

Source: <https://commitlint.js.org/#/?id=test>
____
> Type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]
____

If you'd like to test your commit message previous to using it, you could test it on the command line:
```
echo 'foo: bar' | commitlint
```

## Code conventions

The general code conventions are guaranteed by the following tools.

### Through configuration files: `.editorconfig` for IDEs and `.gitattributes` for git checkins
Both the [`.editorconfig`](https://editorconfig.org/) and [`.gitattributes`](https://dev.to/deadlybyte/please-add-gitattributes-to-your-git-repository-1jld) ensure a consistent code structure and conventions through their configurations.

### xo
The [xo](adr/linting-xo.adoc) tool provides a general code linting mechanism.

### prettier
The [prettier](adr/code_style_formatter-prettier.adoc) tool provides a general code prettfying.

## Linting via [Super-Linter](https://github.com/marketplace/actions/super-linter)

To prevent the linting of generated files (like e.g. the reference screenshots by backstopjs), we'll be [excluding those via an environmental GitHub variable](https://github.com/github/super-linter#filter-linted-files) for this project with the env `FILTER_REGEX_EXCLUDE`.

Further links regarding language specific settings are located in the super-lint repository: <https://github.com/github/super-linter/tree/master/TEMPLATES>

### json files via jsonlint

- [pipeline-components.dev/containers/jsonlint](https://pipeline-components.dev/containers/jsonlint/)

### yaml files via yamllint

- [yamllint.readthedocs.io](https://yamllint.readthedocs.io/)

### markdown files via markdownlint

- [github.com/markdownlint/markdownlint](https://github.com/markdownlint/markdownlint/)

### shell scripts via ShellCheck

- [github.com/koalaman/shellcheck](https://github.com/koalaman/shellcheck/)
