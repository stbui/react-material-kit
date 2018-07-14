import React from 'react';
import ReactDOM from 'react-dom';
import { transform } from 'babel-standalone';
import CodePreview from './CodePreview';

export class Demo extends React.Component {
  containerId: any;
  title;
  document;
  source;

  constructor(props) {
    super(props);

    this.state = {
      showBlock: false,
      code: undefined
    };

    const random = String(Math.random() * 1e9);
    this.containerId = `${parseInt(random, 10).toString(36)}`;

    this.document = props.children.match(/([^]*)\n?(```[^]+```)/);
    this.title = this.document[1];
    this.source = this.document[2].match(/```(.*)\n?([^]+)```/);
  }

  componentDidMount() {
    this.renderSource(this.source[2]);
  }

  renderSource(source) {
    import('../../components')
      .then(Element => {
        const args = ['context', 'React', 'ReactDOM'];
        const argv = [this, React, ReactDOM];

        for (const key in Element) {
          args.push(key);
          argv.push(Element[key]);
        }
        return { args, argv };
      })
      .then(({ args, argv }) => {
        const _source = source
          .replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'stbui';/, ``)
          .replace(
            'mountNode',
            `document.getElementById('${this.containerId}')`
          );

        const { code } = transform(_source, {
          presets: ['es2015', 'react']
        });

        args.push(code);
        new Function(...args).apply(null, argv);
        this.source[2] = source;
      })
      .catch(err => {
        if (process.env.NODE_ENV !== 'production') {
          throw err;
        }
      });
  }

  render() {
    return (
      <div>
        <div>{this.title}</div>
        <div id={this.containerId} />
        <CodePreview code={this.source[2]} />
      </div>
    );
  }
}

export default Demo;
