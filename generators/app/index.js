const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your module name',
            default: this.appname, // Default to current folder name
        }]).then((answers) => {
            this.props = answers;
        });
    }

    writing() {
        const { name } = this.props;
        const nativePath = `ios/${name}`;

        this.fs.copyTpl(
            this.templatePath('RNDummyView.h'),
            this.destinationPath(`${nativePath}/RN${name}.h`),
            { name },
        );

        this.fs.copyTpl(
            this.templatePath('RNDummyView.m'),
            this.destinationPath(`${nativePath}/RN${name}.m`),
            { name },
        );

        this.fs.copyTpl(
            this.templatePath('DummyView.swift'),
            this.destinationPath(`${nativePath}/${name}.swift`),
            { name },
        );
    }
};
