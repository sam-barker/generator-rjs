const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your component name (camelCase)',
        default: 'myComponent'
      }
    ]);
  }

  install () {
    this.npmInstall(
      [
        '@babel/cli',
        '@babel/core',
        '@babel/preset-env',
        '@babel/preset-react',
        'babel-loader',
        'enzyme',
        'enzyme-adapter-react-16',
        'html-webpack-plugin',
        'husky',
        'jest',
        'semistandard',
        'webpack',
        'webpack-cli',
        'webpack-dev-server'
      ],
      { 'save-dev': true }
    );
    this.npmInstall(
      [
        'react',
        'prop-types',
        'react-dom'
      ],
      { 'save-dev': false }
    );
  }
};
