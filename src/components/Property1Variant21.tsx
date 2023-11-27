import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Variant21.module.css";

type Property1Variant21Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propTop1?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propFontSize?: CSSProperties["fontSize"];
  propColor?: CSSProperties["color"];
};

const Property1Variant21: FunctionComponent<Property1Variant21Type> = ({
  propTop,
  propLeft,
  propWidth,
  propTop1,
  propLeft1,
  propFontSize,
  propColor,
}) => {
  const property1Variant24Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      top: propTop1,
      left: propLeft1,
      fontSize: propFontSize,
      color: propColor,
    };
  }, [propWidth, propTop1, propLeft1, propFontSize, propColor]);

  return (
    <div className={styles.property1variant2} style={property1Variant24Style}>
      <div className={styles.contact} style={contactStyle}>
        Contact
      </div>
    </div>
  );
};

export default Property1Variant21;
