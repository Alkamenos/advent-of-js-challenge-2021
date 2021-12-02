# advent-of-js-challenge-2021

Тут я буду выкладывать свои варианты решения задач из `#adventofjs` `#adventofcss`
Ссылка на контест - https://www.adventofjs.com

![thumbnail.png](thumbnail.png)

-   🐉 [Lerna](https://lernajs.io/)  - The Monorepo manager
-   📦 [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
-   🚀 [React](https://reactjs.org/)  -  JavaScript library for user interfaces
-   💅 [styled-components](https://www.styled-components.com/)  -  CSS in JS elegance
-   🛠 [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
-   📖 [Storybook](https://storybook.js.org/) - UI Component Environment
-   🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing

## Usage

-   `yarn dev` - This starts Storybook for viewing all the components locally.
-   `yarn bootstrap` - This installs all of the packages and links dependent packages together.
-   `yarn build` - This babelfies all of the packages and creates `/lib` folders for each one.
-   `yarn test` - Run all linting and unit tests before committing.
-   `yarn test -o` - Run only the tests that have changed.
-   `yarn test -u` - Update all of the snapshot tests.
