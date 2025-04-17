export type ParamType = "string";

export interface Param {
  id: number;
  name: string;
  type: ParamType;
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}
