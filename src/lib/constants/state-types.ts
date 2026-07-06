import { StateEnum } from '../enums/state.enum';

export type StateType = {
  label: string;
  value: StateEnum;
};

export const statesTypes = [
  { label: 'Immutable', value: StateEnum.Immutable },
  { label: 'Mutable', value: StateEnum.Mutable },
  { label: 'All', value: StateEnum.NULL },
];
