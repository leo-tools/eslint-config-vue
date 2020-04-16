# eslint-config-vue

![](https://img.shields.io/github/release/leo-tools/eslint-config-vue.svg)

eslint config for vue

## Installation

```shell script
$ npm install --save-dev @leo-tools/eslint-config-vue
```

## Usage

This package is base on `@vue/cli-plugin-eslint` and `eslint-plugin-vue`, so you need to use `@vue/cli` create a vue project with eslint, and then install this package.

Once the @leo-tools/eslint-config-vue package is installed, you can use it by specifying @leo-tools/eslint-config-vue in the extends section of your ESLint configuration.

```text
{
  "extends": ["@leo-tools/eslint-config-vue"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
