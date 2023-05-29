# Forked from `@remix-run/eslint-config`

Personal ESlint config forked from Remix to support non-remix environments.

## Installation

First, install this package along with ESLint in your project. **This package requires at least version 8.1 of ESLint**

```sh
npm install -D eslint @rileytomasek/eslint-config
```

### Node.js

Then create a file named `.eslintrc.js` in the root of your project:

```js filename=.eslintrc.js
module.exports = {
  extends: [
    "@rileytomaek/eslint-config",
    "@rileytomaek/eslint-config/node",
  ]
};
```

### React

Then create a file named `.eslintrc.js` in the root of your project:

```js filename=.eslintrc.js
module.exports = {
  extends: [
    "@rileytomaek/eslint-config",
    "@rileytomaek/eslint-config/react",
  ]
};
```

Please note that because this ruleset is optional, we do not include the core libraries as peer dependencies for this package. If you use these rules, be sure that you have the following dependencies installed in your project:

```json filename=package.json
{
  "dependencies": {
    "react": "*",
  }
}
```

### Jest

This packages also ships with optional configuration options for projects that use [Jest](https://jestjs.io/). To enable these rules, add the following to your `.eslintrc`:

```js filename=.eslintrc.js
module.exports = {
  extends: [
    "@rileytomaek/eslint-config",
    "@rileytomaek/eslint-config/jest",
  ],
};
```

Please note that because this ruleset is optional, we do not include the core libraries as peer dependencies for this package. If you use these rules, be sure that you have the following dependencies installed in your project:

```json filename=package.json
{
  "dependencies": {
    "jest": ">=26.0.0"
  }
}
```
