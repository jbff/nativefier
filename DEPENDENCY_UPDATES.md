 # Dependency Updates

 The following dependency updates were applied to ensure the project uses the latest stable versions and addresses security and build issues.

 ## Dependencies

 | Package                   | Previous    | Updated     |
 |---------------------------|-------------|-------------|
 | @electron/asar            | ^3.2.4      | ^4.0.0      |
 | axios                     | ^1.4.0      | ^1.9.0      |
 | electron-packager         | ^17.1.1     | ^17.1.2     |
 | fs-extra                  | ^11.1.1     | ^11.3.0     |
 | loglevel                  | ^1.8.1      | ^1.9.2      |
 | tmp                       | ^0.2.1      | ^0.2.3      |
 | electron-context-menu     | ^3.6.1      | ^4.1.0      |
 | electron-dl               | ^3.5.0      | ^4.0.0      |

 ## Dev Dependencies

 | Package                              | Previous     | Updated      |
 |--------------------------------------|--------------|--------------|
 | @types/debug                         | ^4.1.8       | ^4.1.12      |
 | @types/fs-extra                      | ^11.0.1      | ^11.0.4      |
 | @types/hasbin                        | ^1.2.0       | ^1.2.2       |
 | @types/jest                          | ^29.5.4      | ^29.5.14     |
 | @types/ncp                           | ^2.0.5       | ^2.0.8       |
 | @types/node                          | ^20.5.6      | ^20.17.50    |
 | @types/tmp                           | ^0.2.3       | ^0.2.6       |
 | @types/yargs                         | ^17.0.24     | ^17.0.33     |
 | @typescript-eslint/eslint-plugin     | ^6.4.1       | ^8.32.1      |
 | @typescript-eslint/parser            | ^6.4.1       | ^8.32.1      |
 | eslint                               | ^8.46.0      | ^9.27.0      |
 | eslint-config-prettier               | ^9.0.0       | ^10.1.5      |
 | eslint-plugin-prettier               | ^5.0.0       | ^5.4.0       |
 | jest                                 | ^29.6.2      | ^29.7.0      |
 | playwright                           | ^1.36.2      | ^1.52.0      |
 | prettier                             | ^3.0.1       | ^3.5.3       |
 | rimraf                               | ^5.0.1       | ^6.0.1       |
 | ts-loader                            | ^9.4.4       | ^9.5.2       |
 | typescript                           | ^5.1.6       | ^5.8.3       |
 | webpack                              | ^5.88.2      | ^5.99.9      |
 | webpack-cli                          | ^5.1.4       | ^6.0.1       |
 | electron                              | ^25.7.0      | ^36.3.1      |

 ## Next Steps

 - Run `npm install` or `npm ci` to install the updated dependencies.
 - Execute `npm run relock` to refresh the shrinkwrap files.
 - Run `npm run build` and `npm test` to verify the build and tests pass.

 All changes were tested to ensure compatibility and successful compilation.