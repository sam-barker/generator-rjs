# generator-rjs

[![Greenkeeper badge](https://badges.greenkeeper.io/sam-barker/generator-rjs.svg)](https://greenkeeper.io/)

A Yeoman generator for boostrapping a React project with the following technologies:
  * Jest as a test framework, with 100% enforced code coverage
  * Enzyme to test react components
  * SemistandardJS for linting
  * Webpack for bundling
  * Husky for commit hooks

## tl;dr

1. Installing yeoman and the generator:
```
npm install -g yo
npm install -g generator-rjs
```
2. Create your project directory, and inside it run `yo rjs`
3. Enjoy!

## Scripts
Once generated, the following scripts can be used in your project
```
"build:dev": builds with webpack in dev mode,
"build:prod": builds with webpack in prod mode,
"start:dev": starts a webpack server with hot reloading in dev mode,
"start:prod": starts a webpack server with hot reloading in prod mode,
"lint": lints the code with semistandard,
"test": runs unit tests,
"test:coverage": runs test coverage
```


