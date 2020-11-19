import { ComponentType, ReactElement as ElementType } from 'react';

import { colors, spacing } from '../theme';
import { CommonProps, OptionTypeBase } from '../types';

// ==============================
// Dropdown & Clear Icons
// ==============================

export function CrossIcon(props: any): any; // TODO svg type
export function DownChevron(props: any): any; // TODO svg type

// ==============================
// Dropdown & Clear Buttons
// ==============================

export type IndicatorProps<OptionType extends OptionTypeBase, isMulti extends boolean> = CommonProps<OptionType, isMulti> & {
  /** The children to be rendered inside the indicator. */
  children: ElementType,
  /** Props that will be passed on to the children. */
  innerProps: any,
  /** The focused state of the select. */
  isFocused: boolean,
  /** Whether the text is right to left */
  isRtl: boolean,
  /** Whether the component is disabled */
  isDisabled: boolean
};

export type baseCSS = (props: IndicatorProps<any, any>) => React.CSSProperties;

export const dropdownIndicatorCSS: baseCSS;
export const DropdownIndicator: ComponentType<IndicatorProps<any, any>>;

export const clearIndicatorCSS: baseCSS;
export const ClearIndicator: ComponentType<IndicatorProps<any, any>>;

// ==============================
// Separator
// ==============================

export interface SeparatorState { isDisabled: boolean; }

export function indicatorSeparatorCSS(state: SeparatorState): React.CSSProperties;

export const IndicatorSeparator: ComponentType<IndicatorProps<any, any>>;

// ==============================
// Loading
// ==============================

export function loadingIndicatorCSS(state: {
  isFocused: boolean,
  size: number,
}): React.CSSProperties;

export type LoadingIconProps<OptionType extends OptionTypeBase, isMulti extends boolean> = {
  /** Props that will be passed on to the children. */
  innerProps: any,
  /** The focused state of the select. */
  isFocused: boolean,
  /** Whether the text is right to left */
  isRtl: boolean,
} & CommonProps<OptionType, isMulti> & {
  /** Set size of the container. */
  size: number,
};
export const LoadingIndicator: ComponentType<LoadingIconProps<any, any>>;
// TODO LoadingIndicator.defaultProps: { size: number };
