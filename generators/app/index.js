const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ]);
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: this.answers.name }
    );
    this.fs.copyTpl(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html'),
      { name: this.answers.name }
    );
    this.fs.copy(
      this.templatePath('__tests__/components/app/index.spec.js'),
      this.destinationPath('__tests__/components/app/index.spec.js')
    );
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );
    this.fs.copy(
      this.templatePath('src/components/app/index.js'),
      this.destinationPath('src/components/app/index.js')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('testSetup.js'),
      this.destinationPath('testSetup.js')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }

  install () {
    this.npmInstall(
      [
        '@babel/cli',
        '@babel/core',
        '@babel/preset-env',
        '@babel/preset-react',
        'babel-eslint',
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
