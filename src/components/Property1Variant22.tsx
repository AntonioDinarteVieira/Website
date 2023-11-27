import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Variant22.module.css";

type Property1Variant22Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propTop1?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propFontSize?: CSSProperties["fontSize"];
  propColor?: CSSProperties["color"];
};

const Property1Variant22: FunctionComponent<Property1Variant22Type> = ({
  propTop,
  propLeft,
  propWidth,
  propTop1,
  propLeft1,
  propFontSize,
  propColor,
}) => {
  const property1Variant23Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const trendsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      top: propTop1,
      left: propLeft1,
      fontSize: propFontSize,
      color: propColor,
    };
  }, [propWidth, propTop1, propLeft1, propFontSize, propColor]);

  return (
    <div className={styles.property1variant2} style={property1Variant23Style}>
      <div className={styles.trends} style={trendsStyle}>
        Trends
      </div>
    </div>
  );
};

export default Property1Variant22;
