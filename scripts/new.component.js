/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { execSync } = require('child_process');
const { version } = require('../package.json');

const copyright = `/**
 * stbui v${version}
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */
`;

function writeFile(fileName, content, component) {
  fs.writeFileSync(
    path.resolve(`src/components/${component}`, fileName),
    content,
    {
      encoding: 'utf8'
    }
  );
}

function fileIndexScss(component) {
  const name = component.toLowerCase();
  const path = `${name}`;
  const content = `
$${name}-prefix-cls: "stbui-${name}";

.#{$${name}-prefix-cls} {

}
  `;
  writeFile(`${name}.scss`, content, path);
}

function fileIndexTsx(component) {
  const content = `${copyright}
export * from './public_api';
  `;

  writeFile('index.tsx', content, component);
}

function filePropsType(component) {
  const content = `${copyright}
export default interface PropsType {
  prefixCls?: string;
  className?: string;
}
  `;

  writeFile('PropsType.tsx', content, component);
}

function fileComponentTsx(component) {
  const content = `${copyright}
import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class ${component} extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-${component.toLowerCase()}'
  };

  render() {
    const { prefixCls, className, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className);

    return (
      <div
        className={cls}
        {...otherProps}
      >
      ${component}
      </div>
    );
  }
}
export default ${component};
`;
  writeFile(`${component}.tsx`, content, component);
}

function filePubilcApi(component) {
  const content = `${copyright}
export * from './${component}'
  `;
  writeFile(`public_api.tsx`, content, component);
}

function fileReadme(component) {
  const content = `# ${component}

# 示例

### 基本用法

<!--demo-->

\`\`\`jsx
import { ${component} } from 'stbui';

class Demo extends React.Component {
  render() {
    return <${component} />;
  }
}

ReactDOM.render(<Demo />, mountNode);
\`\`\`

<!--:::-->

# API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :----- | :----------- | :--- |

`;
  writeFile(`README.md`, content, component);
}

const component = process.argv[2];
assert(
  component,
  `
组件名称不能为空，请带上组件名称：
npm run new ComponentName
`
);
assert(
  !fs.existsSync(path.resolve('components', component)),
  `
${component} 组件已经存在！
`
);

fs.mkdirSync(path.resolve('src/components', component));
fileIndexScss(component);
fileComponentTsx(component);
fileIndexTsx(component);
filePropsType(component);
filePubilcApi(component);
fileReadme(component);

console.info(`组件成功添加到 ./src/components/${component} 目录下。`);
