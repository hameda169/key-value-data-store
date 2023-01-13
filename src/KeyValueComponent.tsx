import { KeyValuePair } from "./keyValuePair";
// KeyValueComponent.tsx
import React, { useCallback } from "react";
import "./KeyValueComponent.css";

interface Props {
  value: KeyValuePair;
  onChange: (index: number, name: "key" | "value", value: string) => void;
  index: number;
}

const KeyValueComponent: React.FC<Props> = React.memo(
  ({ value, onChange, index }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange(index, name as "key" | "value", value);
      },
      [index, onChange]
    );

    return (
      <div className="key-value-component-container">
        <input
          className="key-value-input"
          name="key"
          value={value.key}
          onChange={handleChange}
          placeholder="Key"
          aria-label="Key"
        />
        <input
          className="key-value-input"
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
