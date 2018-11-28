// import React from 'react';
// import ReactDOM from 'react-dom';
// import marked from 'marked';
// import { Demo } from './Demo';

// export class Markdown extends React.Component<any, any> {
//   components: Map<string, any>;
//   renderer;

//   constructor(props) {
//     super(props);

//     this.components = new Map<string, any>();
//     this.renderer = new marked.Renderer();
//   }

//   componentDidMount() {
//     this.renderDOM();
//   }

//   componentDidUpdate() {
//     this.renderDOM();
//   }

//   renderDOM() {
//     for (const [id, component] of this.components) {
//       const div = document.getElementById(id);

//       if (div instanceof HTMLElement) {
//         ReactDOM.render(component, div);
//       }
//     }
//   }

//   render() {
//     const { text } = this.props;

//     this.components.clear();

//     const html = marked(
//       text.replace(
//         /<!--\s?demo\s?-->([^]+?)<!--:::-->/g,
//         (match, p1, offset) => {
//           const id = offset.toString(36);

//           this.components.set(
//             id,
//             React.createElement(
//               Demo,
//               Object.assign(
//                 {
//                   name: this.constructor.name.toLowerCase()
//                 },
//                 this.props
//               ),
//               p1
//             )
//           );

//           return `<div id=${id}></div>`;
//         }
//       ),
//       { renderer: this.renderer }
//     );

//     return (
//       <div
//         className="markdown-body"
//         dangerouslySetInnerHTML={{ __html: html }}
//       />
//     );
//   }
// }
