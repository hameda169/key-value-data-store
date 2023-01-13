import React, { useCallback, useMemo } from "react";
import KeyValueComponent from "./KeyValueComponent";
import { KeyValuePair } from "./keyValuePair";
import "./KeyValueArrayComponent.css";
interface Props {
  value: KeyValuePair[];
  onChange: (keyValuePairs: KeyValuePair[]) => void;
}

const KeyValueArrayComponent: React.FC<Props> = ({ value, onChange }) => {
  const handleAddPair = useCallback(() => {
    onChange([...value, { key: "", value: "" }]);
  }, [onChange, value]);

  const handleChange = useCallback(
    (index: number, name: "key" | "value", val: string) => {
      const newPairs = [...value];
      newPairs[index][name] = val;
      onChange(newPairs);
    },
    [onChange, value]
  );

  const handleDeletePair = useCallback(
    (index: number) => {
      const newPairs = [...value];
      newPairs.splice(index, 1);
      onChange(newPairs);
    },
    [onChange, value]
  );

  return (
    <div className="key-value-array-component-container">
      <button className="key-value-array-add-button" onClick={handleAddPair}>
        Add Key-Value Pair
      </button>
      {useMemo(
        () =>
          value.map((pair, index) => (
            <KeyValueComponent
              value={pair}
              onChange={(name, val) => handleChange(index, name, val)}
              onDelete={() => handleDeletePair(index)}
            />
          )),
        [value, handleChange, handleDeletePair]
      )}
    </div>
  );
};

export default KeyValueArrayComponent;
