import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Frame15.module.css";

type Property1Frame15Type = {
  imageResolution?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
};

const Property1Frame15: FunctionComponent<Property1Frame15Type> = ({
  imageResolution,
  propTop,
  propLeft,
  propHeight,
}) => {
  const property1Frame15Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propTop, propLeft, propHeight]);

  return (
    <img
      className={styles.property1frame15}
      alt=""
      src={imageResolution}
      style={property1Frame15Style}
    />
  );
};

export default Property1Frame15;
