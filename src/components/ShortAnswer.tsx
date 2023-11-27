import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ShortAnswer.module.css";

type ShortAnswerType = {
  typeAQuestion?: string;

  /** Style props */
  shortAnswerWidth?: CSSProperties["width"];
  shortAnswerGap?: CSSProperties["gap"];
  typeAQuestionFontSize?: CSSProperties["fontSize"];
  frameBackgroundColor?: CSSProperties["backgroundColor"];
  frameBorder?: CSSProperties["border"];
  frameHeight?: CSSProperties["height"];
  framePadding?: CSSProperties["padding"];
  typeHereFontSize?: CSSProperties["fontSize"];
  errorFontSize?: CSSProperties["fontSize"];
};

const ShortAnswer: FunctionComponent<ShortAnswerType> = ({
  typeAQuestion,
  shortAnswerWidth,
  shortAnswerGap,
  typeAQuestionFontSize,
  frameBackgroundColor,
  frameBorder,
  frameHeight,
  framePadding,
  typeHereFontSize,
  errorFontSize,
}) => {
  const shortAnswerStyle: CSSProperties = useMemo(() => {
    return {
      width: shortAnswerWidth,
      gap: shortAnswerGap,
    };
  }, [shortAnswerWidth, shortAnswerGap]);

  const typeAQuestion4Style: CSSProperties = useMemo(() => {
    return {
      fontSize: typeAQuestionFontSize,
    };
  }, [typeAQuestionFontSize]);

  const frame4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameBackgroundColor,
      border: frameBorder,
      height: frameHeight,
      padding: framePadding,
    };
  }, [frameBackgroundColor, frameBorder, frameHeight, framePadding]);

  const typeHere1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: typeHereFontSize,
    };
  }, [typeHereFontSize]);

  const error2Style: CSSProperties = useMemo(() => {
    return {
      fontSize: errorFontSize,
    };
  }, [errorFontSize]);

  return (
    <div className={styles.shortAnswer} style={shortAnswerStyle}>
      <b className={styles.typeAQuestion} style={typeAQuestion4Style}>
        {typeAQuestion}
      </b>
      <div className={styles.frame} style={frame4Style}>
        <div className={styles.typeHere} style={typeHere1Style}>
          Type here...
        </div>
      </div>
      <div className={styles.error} style={error2Style}>
        Error
      </div>
    </div>
  );
};

export default ShortAnswer;
