# Playwright testing

This directory provides `docker-compose.yml` to test or regenerate screenshots.

-   run `npm run build && npm run build --workspace=react-showcase` from your root directory

-   run `docker-compose -f ./e2e/docker-compose.yml build --build-arg version=$(npm pkg get devDependencies.@playwright/test)` (you may need to run this again after playwright version changed in `package.json`)

-   run either one of those commands:
    -   testing: `docker-compose -f ./e2e/docker-compose.yml up`
    -   update screenshots (all): `docker-compose -f ./e2e/docker-compose.regenerate.yml up`
    -   update screenshots (components): `docker-compose -f ./e2e/docker-compose.components.yml up`
    -   update screenshots (showcases): `docker-compose -f ./e2e/docker-compose.showcases.yml up`

## Test with linux build

-   run `docker-compose -f ./e2e/docker-compose.start.yml up`

## FAQ

If you're running into errors on testing or screenshot generation e.g. regarding missing dependencies (`db-ui-mono-e2e-playwright-1 | sh: 1: cross-env: not found`), you're probably based on an old version of the image. That for you would need to rebuild the image by adding the '--build' parameter, like e.g. `docker-compose -f ./e2e/docker-compose.regenerate.yml up --build`
