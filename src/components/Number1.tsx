import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Number1.module.css";

type Number1Type = {
  typeAQuestion?: string;

  /** Style props */
  numberWidth?: CSSProperties["width"];
  numberGap?: CSSProperties["gap"];
  typeAQuestionFontSize?: CSSProperties["fontSize"];
  frameBackgroundColor?: CSSProperties["backgroundColor"];
  frameBorder?: CSSProperties["border"];
  frameHeight?: CSSProperties["height"];
  framePadding?: CSSProperties["padding"];
  eg26FontSize?: CSSProperties["fontSize"];
  errorFontSize?: CSSProperties["fontSize"];
};

const Number1: FunctionComponent<Number1Type> = ({
  typeAQuestion,
  numberWidth,
  numberGap,
  typeAQuestionFontSize,
  frameBackgroundColor,
  frameBorder,
  frameHeight,
  framePadding,
  eg26FontSize,
  errorFontSize,
}) => {
  const numberStyle: CSSProperties = useMemo(() => {
    return {
      width: numberWidth,
      gap: numberGap,
    };
  }, [numberWidth, numberGap]);

  const typeAQuestion2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: typeAQuestionFontSize,
    };
  }, [typeAQuestionFontSize]);

  const frame2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameBackgroundColor,
      border: frameBorder,
      height: frameHeight,
      padding: framePadding,
    };
  }, [frameBackgroundColor, frameBorder, frameHeight, framePadding]);

  const eg26Style: CSSProperties = useMemo(() => {
    return {
      fontSize: eg26FontSize,
    };
  }, [eg26FontSize]);

  const errorStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: errorFontSize,
    };
  }, [errorFontSize]);

  return (
    <div className={styles.number} style={numberStyle}>
      <b className={styles.typeAQuestion} style={typeAQuestion2Style}>
        {typeAQuestion}
      </b>
      <div className={styles.frame} style={frame2Style}>
        <div className={styles.eg26} style={eg26Style}>
          e.g.,26
        </div>
      </div>
      <div className={styles.error} style={errorStyle}>
        Error
      </div>
    </div>
  );
};

export default Number1;
