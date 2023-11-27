import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1DefaultIcon1.module.css";

type Property1DefaultIcon1Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Property1DefaultIcon1: FunctionComponent<Property1DefaultIcon1Type> = ({
  propTop,
  propLeft,
}) => {
  const property1DefaultIconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <img
      className={styles.property1defaultIcon}
      alt=""
      src="/logos@2x.png"
      style={property1DefaultIconStyle}
    />
  );
};

export default Property1DefaultIcon1;
