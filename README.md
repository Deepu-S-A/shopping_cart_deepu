# Build

### NPM

NPM is the default package manager for NodeJS. NPM can install all the dependencies of a project through the package.json file. It can also update and uninstall packages. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

We run the following command to install the required libraries:

`npm install`

## Execution

### No build
You can execute the program using the command

node main.js <absolute_path_to_input_file>

### NPM

Once the npm install from the previous build process is complete, you can execute the program using the command

`npm start --silent <absolute_path_to_input_file>`

# Unit tests

### Mocha

After npm install, Mocha based test cases can be executed with the following command from the root folder

`mocha test`

You can also use the following script to run the test cases directly

`npm test`

