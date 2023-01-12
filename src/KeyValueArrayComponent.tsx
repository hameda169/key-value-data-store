import React, { useCallback, useMemo } from "react";
import KeyValueComponent from "./KeyValueComponent";
import { KeyValuePair } from "./keyValuePair";
interface Props {
  value: KeyValuePair[];
  onChange: (keyValuePairs: KeyValuePair[]) => void;
}

const KeyValueArrayComponent: React.FC<Props> = ({ value, onChange }) => {
  const handleAddPair = useCallback(() => {
    onChange([...value, { key: "", value: "" }]);
  }, [onChange, value]);

  const handleChange = useCallback(
    (index: number, name: string, val: string) => {
      const newPairs = [...value];
      newPairs[index][name] = val;
      onChange(newPairs);
    },
    [onChange, value]
  );

  return (
    <div>
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
      <button onClick={handleAddPair}>Add Key-Value Pair</button>
    </div>
  );
};

export default KeyValueArrayComponent;
