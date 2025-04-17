import React from "react";
import ParamEditor from "./components/ParamEditor";
import { Param, Model } from "./types/types";

const params: Param[] = [
  { id: 1, name: "Назначение", type: "string" },
  { id: 2, name: "Длина", type: "string" },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: "" },
    { paramId: 2, value: "" },
  ],
};

const App: React.FC = () => {
  const editorRef = React.useRef<InstanceType<typeof ParamEditor>>(null);

  const handleSave = () => {
    if (editorRef.current) {
      const updatedModel = editorRef.current.getModel();
      console.log("Updated Model:", updatedModel);
    }
  };

  return (
    <div>
      <h1>Редактор параметров</h1>
      <ParamEditor ref={editorRef} params={params} model={model} />
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default App;
