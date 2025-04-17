import React from "react";
import { Param, Model, ParamValue } from "../types/types";
import ParamInput from "./ParamInput";
import styles from "./ParamEditor.module.scss";

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const initialParamValues: { [key: number]: string } =
      this.props.model.paramValues.reduce(
        (acc, pv) => ({ ...acc, [pv.paramId]: pv.value }),
        {} as { [key: number]: string },
      );

    this.state = {
      paramValues: this.props.params.map((param) => ({
        paramId: param.id,
        value: initialParamValues[param.id] || "",
      })),
    };
  }

  public getModel(): Model {
    return {
      paramValues: this.state.paramValues,
    };
  }

  private handleInputChange = (paramId: number, value: string) => {
    this.setState((prevState) => ({
      paramValues: prevState.paramValues.map((pv) =>
        pv.paramId === paramId ? { ...pv, value } : pv,
      ),
    }));
  };

  private renderParamInput(param: Param, value: string) {
    switch (param.type) {
      case "string":
      default:
        return (
          <div className={styles["param-editor__input"]}>
            <ParamInput
              key={param.id}
              param={param}
              value={value}
              onChange={(v) => this.handleInputChange(param.id, v)}
            />
          </div>
        );
    }
  }

  render() {
    return (
      <div className={styles["param-editor"]}>
        {this.props.params.map((param) => {
          const value =
            this.state.paramValues.find((pv) => pv.paramId === param.id)
              ?.value || "";
          return this.renderParamInput(param, value);
        })}
      </div>
    );
  }
}

export default ParamEditor;
