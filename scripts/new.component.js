/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { execSync } = require('child_process');

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
  const name = component;
  const path = `${name}`;
  const content = `
  ${name}-prefix-cls: "stbui-${name}";
  .#{${name}-prefix-cls} {
  }
  `;
  writeFile(`${name}.scss`, content, path);
}

function addImportLess(component) {}

function fileIndexTsx(component) {}

function fileComponentTsx(component) {
  const content = `
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import PropsType from './PropsType';

export class ${component} extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-${component}'
  };

  render() {
    const {className, style, ...otherProps} = this.props;
    const { prefixCls, className } = this.props;
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
