import { KeyValuePair } from "./keyValuePair";
// KeyValueComponent.tsx
import React, { useCallback } from "react";

interface Props {
  value: KeyValuePair;
  onChange: (index: number, name: string, value: string) => void;
  index: number;
}

const KeyValueComponent: React.FC<Props> = React.memo(
  ({ value, onChange, index }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange(index, name, value);
      },
      [index, onChange]
    );

    return (
      <div>
        <input
          name="key"
          value={value.key}
          onChange={handleChange}
          placeholder="Key"
          aria-label="Key"
        />
        <input
          name="value"
          value={value.value}
          onChange={handleChange}
          placeholder="Value"
          aria-label="Value"
        />
      </div>
    );
  }
);

export default KeyValueComponent;
