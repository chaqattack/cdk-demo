import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { CustomLambda } from '../src/lambdaConstruct';

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  const template = Template.fromStack(stack);

  const my_lambda = new CustomLambda(stack, 'demo-lambnda', {
    name: 'demo-lambda',
    codeDir: 'test/python/',
    handler: 'handler',
    runtime: Runtime.PYTHON_3_10,
    version: 1,
  });

  console.log(my_lambda.lambdaName);
  template.findOutputs('*', { value: my_lambda.lambdaName });

});