import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'charles.antigua@billet.do',
  authorAddress: 'charles.antigua@billet.do',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'cdk-demo',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/chaqattack/cdk-demo.git',

  deps: ['aws-cdk-lib'], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();