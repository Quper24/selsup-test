import React from "react";
import { Param } from "../types/types";
import styles from "./ParamInput.module.scss";

interface ParamInputProps {
  param: Param;
  value: string;
  onChange: (value: string) => void;
}

const ParamInput: React.FC<ParamInputProps> = ({ param, value, onChange }) => {
  return (
    <div className={styles["param-input"]}>
      <label htmlFor={`param-${param.id}`}>{param.name}:</label>
      <input
        id={`param-${param.id}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ParamInput;
