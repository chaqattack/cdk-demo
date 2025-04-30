import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';


export interface CustomLambdaProps {
  readonly name: string;
  readonly runtime: lambda.Runtime;
  readonly handler: string; // example 'index.handle'
  readonly codeDir: string; // example '/lambda/function
  readonly version: number;
}

export class CustomLambda extends Construct {
  readonly lambdaName: string;
  constructor(parent: Construct, name: string, props: CustomLambdaProps) {
    super(parent, name);


    const customlambda = new lambda.Function(this, 'Function', {
      runtime: props.runtime,
      handler: props.handler,
      code: lambda.Code.fromAsset(props.codeDir),
    });

    this.lambdaName = customlambda.functionName;
  }

}