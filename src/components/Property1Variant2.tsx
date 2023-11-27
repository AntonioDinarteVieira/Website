import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Variant2.module.css";

type Property1Variant2Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propAlignItems?: CSSProperties["alignItems"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propBackground?: CSSProperties["background"];
  propLeft1?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
};

const Property1Variant2: FunctionComponent<Property1Variant2Type> = ({
  propTop,
  propLeft,
  propAlignItems,
  propJustifyContent,
  propHeight,
  propWidth,
  propRight,
  propBottom,
  propBackground,
  propLeft1,
  propWidth1,
  propHeight1,
}) => {
  const property1Variant25Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      height: propHeight,
      width: propWidth,
      right: propRight,
      bottom: propBottom,
    };
  }, [
    propTop,
    propLeft,
    propAlignItems,
    propJustifyContent,
    propHeight,
    propWidth,
    propRight,
    propBottom,
  ]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth1,
      height: propHeight1,
    };
  }, [propLeft1, propWidth1, propHeight1]);

  return (
    <div className={styles.property1variant2} style={property1Variant25Style}>
      <div className={styles.topButton}>
        <div className={styles.topButtonChild} style={ellipseDivStyle} />
        <div className={styles.top}>Top!</div>
        <img
          className={styles.topButtonItem}
          alt=""
          src="/vector-11.svg"
          style={vectorIconStyle}
        />
      </div>
    </div>
  );
};

export default Property1Variant2;
