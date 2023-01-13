import { KeyValuePair } from "./keyValuePair";

import React from "react";
import "./KeyValueComponent.css";

interface Props {
  value: KeyValuePair;
  onChange: (name: string, val: string) => void;
  onDelete: () => void;
}

const KeyValueComponent: React.FC<Props> = React.memo(
  ({ value, onChange, onDelete }) => {
    return (
      <div className="key-value-pair-container">
        <input
          className="key-value-input"
          name="key"
          value={value.key}
          onChange={(e) => onChange("key", e.target.value)}
          placeholder="Key"
        />
        <input
          className="key-value-input"
          name="value"
          value={value.value}
          onChange={(e) => onChange("value", e.target.value)}
          placeholder="Value"
        />
        <button className="key-value-pair-delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    );
  }
);

export default KeyValueComponent;
