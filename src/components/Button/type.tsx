/**
 * stbui v1.0.0
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

export default interface PropsType {
  prefixCls?: string;
  className?: string;
  raised?: boolean;
  stroked?: boolean;
  icon?: boolean;
  fab?: boolean;
}

export type Props = Partial<{
  prefixCls: string;
  className: string;
  raised: boolean;
  stroked: boolean;
  icon: boolean;
  fab: boolean;
}>;

export type State = {
  isReverse?: boolean;
};
