# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

================================My customizations================================

1.  created my vite project
2.  testing setup with vitest

    # all packages are dev dependencies

         yarn add -D vitest
         yarn add -D @vitest/coverage-v8

    # if you want to run test cases in your project you just add scripts type like below

          "test":"vitest"

    # if you want to create test files in your project, you just go to respective directory and crete a folder like **test** foler.

    # under this you just create a file like below

          App.test.tsx

    # just run the tests with below command

        yarn test

    # if you want to get code coverage then add below command in scripts tag

        "test":"vitest --coverage"

    # now run 'yarn test' command, its give complete coverage

    # also we need to install some other dependencies like below

    **follow the same like here example https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib**

    'npm install --save-dev @testing-library/jest-dom ' --it's for checking DOM relaed activities

    npm install --save-dev @testing-library/react --it's for all react level activities like import components ...etc.

    'npm install --save-dev @testing-library/user-event' --it's for user interactions on DOM relaed activities

    npm install --save-dev @vitest/ui -- UI related

    'npm install --save-dev jsdom' --it's for making dynamic interactions on jest-dom like javascript.

    # once these installations are done, we have to start configurations on our project

    once you installed all above packages
    go to src folder --> crete new folder with name test--> create file like **setup.ts**
    add this line here **import '@testing-library/jest-dom'**

# we have to go to vite.config.ts file just add below command under define config

       test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,

},

**note**: if it shows error at test property, you jest declare like below

export default defineConfig(() => ({
plugins: [react()],
test: {
globals: true,
environment: "jsdom",
setupFiles: "./src/test/setup.ts",
},
}));

**object inside arrow function**

# now it gives error as this this **test** will derived from vitest client and vite. so add below reference

/// <reference types="vitest" />
/// <reference types="vite/client" />

**follow the same like here https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts**

# and then you just add to global config in tsconfig.json below command

"types": [
"vitest/globals"
]
as it avoids unnecessary imports in each and every file like below.
import { describe, expect, it } from "vitest";

# if your project grows more and more we need to create util file to avoid redundant code duplication

under src folder create utils folder --> create test-utils.tsx file
**follow this link**
https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/utils/test-utils.tsx
