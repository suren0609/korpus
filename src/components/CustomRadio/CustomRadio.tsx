import React, { FC } from "react";
import styles from "./CustomRadio.module.scss";

interface IProps {
  name: string;
  id: string;
  value: string;
  onChange: () => void;
  checked: boolean;
  text: string;
}

const CustomRadio: FC<IProps> = ({
  name,
  id,
  value,
  onChange,
  checked,
  text,
}) => {
  return (
    <label htmlFor={id} className={styles.radioLabel}>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={styles.customRadio} />
      {text}
    </label>
  );
};

export default CustomRadio;
