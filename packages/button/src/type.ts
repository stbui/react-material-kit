/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

export type Props = Partial<{
  prefixCls: any;
  className: string;
  raised: boolean;
  unelevated: boolean;
  outlined: boolean;
  dense: boolean;
  label: boolean;
  icon: boolean;
  disabled: boolean;
  color: 'primary' | 'accent' | 'warn';
}>;

export type State = {
  isReverse?: boolean;
};
