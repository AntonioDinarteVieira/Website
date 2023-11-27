import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Variant25.module.css";

type Property1Variant25Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propTop1?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propFontSize?: CSSProperties["fontSize"];
  propColor?: CSSProperties["color"];
};

const Property1Variant25: FunctionComponent<Property1Variant25Type> = ({
  propTop,
  propLeft,
  propWidth,
  propTop1,
  propLeft1,
  propFontSize,
  propColor,
}) => {
  const property1Variant2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      top: propTop1,
      left: propLeft1,
      fontSize: propFontSize,
      color: propColor,
    };
  }, [propWidth, propTop1, propLeft1, propFontSize, propColor]);

  return (
    <div className={styles.property1variant2} style={property1Variant2Style}>
      <div className={styles.about} style={aboutStyle}>
        About
      </div>
    </div>
  );
};

export default Property1Variant25;
