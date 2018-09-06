/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

export class Ripple extends Component<PropsType, any> {
  static defaultProps = {
    prefixCls: 'stbui-ripple',
    centerMode: false,
    hidden: true
  };

  touchEvent: any;
  rippleNode: any;
  now: any = new Date();
  seed: number = 0;
  state = {
    children: []
  };

  constructor(props: PropsType) {
    super(props);
    this.touchEvent = {
      touchstart: 'click'
    };
  }

  componentDidMount() {
    if (this.rippleNode) {
      this.rippleNode.parentNode.addEventListener(
        this.touchEvent.touchstart,
        this.handleTouchStart
      );
    }
  }

  componentWillUnmount() {
    if (this.rippleNode) {
      this.rippleNode.parentNode.removeEventListener(
        this.touchEvent.touchstart,
        this.handleTouchStart
      );
    }
    this.rippleNode = null;
    this.touchEvent = null;
  }

  getUuid = () => {
    return `Ripple-${this.now}_${this.seed++}`;
  };

  getPoint(event: any) {
    event = event || window.event;
    return event;
  }

  getRef = (node: any) => {
    this.rippleNode = node;
  };

  ripple = (event: MouseEvent, element: HTMLElement) => {
    const { centerMode, prefixCls, size: sizeProps } = this.props;
    const clickEvent = this.getPoint(event);

    let x =
      clickEvent.pageX ||
      document.documentElement.scrollLeft +
        document.body.scrollLeft +
        clickEvent.clientX;

    let y =
      clickEvent.pageY ||
      document.documentElement.scrollTop +
        document.body.scrollTop +
        clickEvent.clientY;

    const parentNode = this.rippleNode.parentNode;
    const { offsetWidth, offsetHeight } = parentNode;

    const scale = sizeProps === 'sm' ? 2 : 1;
    const size = Math.max(offsetWidth, offsetHeight) * 2;

    const rect = parentNode.getBoundingClientRect();

    if (!centerMode) {
      x = x - rect.left - size / 2;
      y = y - rect.top - size / 2;
    } else {
      x = y = -size / 4;
    }
    if (sizeProps === 'sm') {
      x = y = 0;
    }

    element.style.width = size / scale + 'px';
    element.style.height = size / scale + 'px';
    element.style.top = y + 'px';
    element.style.left = x + 'px';

    element.classList.add('test');
  };

  handleTouchStart = (event: MouseEvent) => {
    const { prefixCls } = this.props;
    const children: any = [...this.state.children!];

    this.setState({ children }, () => {
      const activeIndex = children.length - 1;
      const rippleChild = this.rippleNode.querySelectorAll(`.${prefixCls!}`);
      if (rippleChild[activeIndex]) {
        this.ripple(event, rippleChild[activeIndex]);
      }
    });
  };

  handleAnimationEnd = key => {
    const children: any = (this.state.children as Array<string>).filter(
      child => {
        return key !== child;
      }
    );
    this.setState({ children });
  };

  render() {
    const { children, prefixCls, className, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className);

    return (
      <div className={cls} ref={this.getRef}>
        {this.state.children.map(child => {
          return (
            <div
              key={child}
              onAnimationEnd={() => this.handleAnimationEnd(child)}
              {...otherProps}
            >
              {children}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Ripple;
