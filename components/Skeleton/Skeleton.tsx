import React from "react";
import styles from "./Skeleton.module.css";

type Props = {
  width?: string;
  height?: string;
};

const Skeleton = ({ height, width }: Props)=>{
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "inherit",
      }}
      className={styles.skeleton}
    />
  );
}

export default Skeleton