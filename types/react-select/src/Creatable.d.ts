import * as React from 'react';
import Select, { Props as SelectProps } from './Select';
import { OptionsType, GroupedOptionsType, ValueType, ActionMeta, OptionTypeBase } from './types';
import { cleanValue } from './utils';
import manageState from './stateManager';

export interface CreatableProps<OptionType extends OptionTypeBase, isMulti extends boolean> {
  /* Allow options to be created while the `isLoading` prop is true. Useful to
     prevent the "create new ..." option being displayed while async results are
     still being loaded. */
  allowCreateWhileLoading?: boolean;
  /* Gets the label for the "create new ..." option in the menu. Is given the
     current input value. */
  formatCreateLabel?: (inputValue: string) => React.ReactNode;
  /* Determines whether the "create new ..." option should be displayed based on
     the current input value, select value and options array. */
  isValidNewOption?: (
    inputValue: string,
    value: ValueType<OptionType, isMulti>,
    options: OptionsType<OptionType> | GroupedOptionsType<OptionType>,
   ) => boolean;
  /* Returns the data for the new option when it is created. Used to display the
     value, and is passed to `onChange`. */
  getNewOptionData?: (inputValue: string, optionLabel: React.ReactNode) => OptionType;
  /* If provided, this will be called with the input value when a new option is
     created, and `onChange` will **not** be called. Use this when you need more
     control over what happens when new options are created. */
  onCreateOption?: (inputValue: string) => void;
  /* Sets the position of the createOption element in your options list. Defaults to 'last' */
  createOptionPosition?: 'first' | 'last';
}

export type Props<OptionType extends OptionTypeBase, isMulti extends boolean> = SelectProps<OptionType, isMulti> & CreatableProps<OptionType, isMulti>;

export const defaultProps: Props<any, any>;

export interface State<OptionType extends OptionTypeBase> {
  newOption: OptionType | undefined;
  options: OptionsType<OptionType>;
}

export class Creatable<OptionType extends OptionTypeBase, isMulti extends boolean = false> extends React.Component<Props<OptionType, isMulti>, State<OptionType>> {
  static defaultProps: Props<any, any>;
  select: React.Ref<any>;

  onChange: (newValue: ValueType<OptionType, isMulti>, actionMeta: ActionMeta<OptionType>) => void;
  focus(): void;
  blur(): void;
}

export function makeCreatableSelect(SelectComponent: React.ComponentType<any>): Creatable<any, any>;

export default Creatable;
