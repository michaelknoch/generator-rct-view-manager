const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your module name',
            default: this.appname, // Default to current folder name
        }, {
            type: 'input',
            name: 'nativePath',
            message: 'where to store the native part?',
            default: 'ios',
        }, {
            type: 'input',
            name: 'jsPath',
            message: 'and where to store the js stuff?',
            default: 'app/components',
        }]).then((answers) => {
            this.props = answers;
        });
    }

    writing() {
        const { name, nativePath, jsPath } = this.props;

        this.fs.copyTpl(
            this.templatePath('RNDummyView.h'),
            this.destinationPath(`${nativePath}/${name}/RN${name}.h`),
            { name, addSmartphoneBridging: this.appname === 'smartphone' },
        );

        this.fs.copyTpl(
            this.templatePath('RNDummyView.m'),
            this.destinationPath(`${nativePath}/${name}/RN${name}.m`),
            { name },
        );

        this.fs.copyTpl(
            this.templatePath('DummyView.swift'),
            this.destinationPath(`${nativePath}/${name}/${name}.swift`),
            { name },
        );

        this.fs.copyTpl(
            this.templatePath('RNDummyView.js'),
            this.destinationPath(`${jsPath}/RN${name}.js`),
            { name },
        );
    }
};
