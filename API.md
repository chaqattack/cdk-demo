# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomLambda <a name="CustomLambda" id="cdk-demo.CustomLambda"></a>

#### Initializers <a name="Initializers" id="cdk-demo.CustomLambda.Initializer"></a>

```typescript
import { CustomLambda } from 'cdk-demo'

new CustomLambda(parent: Construct, name: string, props: CustomLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-demo.CustomLambda.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-demo.CustomLambda.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-demo.CustomLambda.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-demo.CustomLambdaProps">CustomLambdaProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="cdk-demo.CustomLambda.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-demo.CustomLambda.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-demo.CustomLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-demo.CustomLambdaProps">CustomLambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-demo.CustomLambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-demo.CustomLambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-demo.CustomLambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-demo.CustomLambda.isConstruct"></a>

```typescript
import { CustomLambda } from 'cdk-demo'

CustomLambda.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-demo.CustomLambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-demo.CustomLambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-demo.CustomLambda.property.lambdaName">lambdaName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-demo.CustomLambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambdaName`<sup>Required</sup> <a name="lambdaName" id="cdk-demo.CustomLambda.property.lambdaName"></a>

```typescript
public readonly lambdaName: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### CustomLambdaProps <a name="CustomLambdaProps" id="cdk-demo.CustomLambdaProps"></a>

#### Initializer <a name="Initializer" id="cdk-demo.CustomLambdaProps.Initializer"></a>

```typescript
import { CustomLambdaProps } from 'cdk-demo'

const customLambdaProps: CustomLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-demo.CustomLambdaProps.property.codeDir">codeDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-demo.CustomLambdaProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-demo.CustomLambdaProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-demo.CustomLambdaProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | *No description.* |
| <code><a href="#cdk-demo.CustomLambdaProps.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `codeDir`<sup>Required</sup> <a name="codeDir" id="cdk-demo.CustomLambdaProps.property.codeDir"></a>

```typescript
public readonly codeDir: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="cdk-demo.CustomLambdaProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-demo.CustomLambdaProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-demo.CustomLambdaProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

---

##### `version`<sup>Required</sup> <a name="version" id="cdk-demo.CustomLambdaProps.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---



