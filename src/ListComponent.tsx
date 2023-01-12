import { useState, useCallback } from "react";
import KeyValueArrayComponent from "./KeyValueArrayComponent";
import { KeyValuePair } from "./keyValuePair";

const ListComponent = () => {
  const [forms, setForms] = useState<KeyValuePair[][]>([
    [{ key: "", value: "" }]
  ]);
  const handleAddForm = () => {
    setForms([...forms, [{ key: "", value: "" }]]);
  };
  const submitForm = useCallback(
    (formIndex: number, data: KeyValuePair[]) => {
      const newForms = [...forms];
      newForms[formIndex] = data;
      setForms(newForms);
    },
    [forms]
  );

  return (
    <div>
      <button onClick={handleAddForm}>Add Form</button>
      {forms.map((form, formIndex) => (
        <KeyValueArrayComponent
          key={formIndex}
          value={form}
          onChange={(data: KeyValuePair[]) => submitForm(formIndex, data)}
        />
      ))}
    </div>
  );
};

export default ListComponent;
