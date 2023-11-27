import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Paragraph.module.css";

type ParagraphType = {
  typeAQuestion?: string;

  /** Style props */
  paragraphWidth?: CSSProperties["width"];
  paragraphGap?: CSSProperties["gap"];
  typeAQuestionFontSize?: CSSProperties["fontSize"];
  frameBackgroundColor?: CSSProperties["backgroundColor"];
  frameBorder?: CSSProperties["border"];
  frameHeight?: CSSProperties["height"];
  framePadding?: CSSProperties["padding"];
  typeHereFontSize?: CSSProperties["fontSize"];
};

const Paragraph: FunctionComponent<ParagraphType> = ({
  typeAQuestion,
  paragraphWidth,
  paragraphGap,
  typeAQuestionFontSize,
  frameBackgroundColor,
  frameBorder,
  frameHeight,
  framePadding,
  typeHereFontSize,
}) => {
  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      width: paragraphWidth,
      gap: paragraphGap,
    };
  }, [paragraphWidth, paragraphGap]);

  const typeAQuestion1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: typeAQuestionFontSize,
    };
  }, [typeAQuestionFontSize]);

  const frame1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameBackgroundColor,
      border: frameBorder,
      height: frameHeight,
      padding: framePadding,
    };
  }, [frameBackgroundColor, frameBorder, frameHeight, framePadding]);

  const typeHereStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: typeHereFontSize,
    };
  }, [typeHereFontSize]);

  return (
    <div className={styles.paragraph} style={paragraphStyle}>
      <b className={styles.typeAQuestion} style={typeAQuestion1Style}>
        {typeAQuestion}
      </b>
      <div className={styles.frame} style={frame1Style}>
        <div className={styles.typeHere} style={typeHereStyle}>
          Type here...
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
