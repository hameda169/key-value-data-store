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

  return (
    <div className="key-value-array-component-container">
      <button className="key-value-array-add-button" onClick={handleAddPair}>
        Add Key-Value Pair
      </button>
      {useMemo(
        () =>
          value.map((pair, index) => (
            <KeyValueComponent
              key={index}
              value={pair}
              onChange={handleChange}
              index={index}
            />
          )),
        [value, handleChange]
      )}
    </div>
  );
};

export default KeyValueArrayComponent;
