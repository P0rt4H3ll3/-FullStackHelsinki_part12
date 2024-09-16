# Enabling Testing for Frontend with Vitest / other possiblity Playwright

## install dependencies

```bash
npm install --save-dev vitest jsdom
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## add script to package.json

```bash

  "scripts": {
    "test": "vitest run"
  }
```

## creating the testSetup.js

```bash
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})
```

## Expanding vite.config.js

```bash
test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js',
  }
```

now with globals: true, there is no need to import keywords such as describe, test and expect into the tests.
but ESLint complains so do this

```bash
npm install --save-dev eslint-plugin-vitest-globals
```

edit the .eslintrc.cjs file
to include vitest-global/env and the plugin

```bash
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    "vitest-globals/env": true  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:vitest-globals/recommended',  ],
  // ...
}
```
