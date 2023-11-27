import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Email.module.css";

type EmailType = {
  typeAQuestion?: string;

  /** Style props */
  emailWidth?: CSSProperties["width"];
  emailGap?: CSSProperties["gap"];
  typeAQuestionFontSize?: CSSProperties["fontSize"];
  frameBackgroundColor?: CSSProperties["backgroundColor"];
  frameBorder?: CSSProperties["border"];
  frameHeight?: CSSProperties["height"];
  framePadding?: CSSProperties["padding"];
  exampleemailcomFontSize?: CSSProperties["fontSize"];
  errorFontSize?: CSSProperties["fontSize"];
};

const Email: FunctionComponent<EmailType> = ({
  typeAQuestion,
  emailWidth,
  emailGap,
  typeAQuestionFontSize,
  frameBackgroundColor,
  frameBorder,
  frameHeight,
  framePadding,
  exampleemailcomFontSize,
  errorFontSize,
}) => {
  const emailStyle: CSSProperties = useMemo(() => {
    return {
      width: emailWidth,
      gap: emailGap,
    };
  }, [emailWidth, emailGap]);

  const typeAQuestion3Style: CSSProperties = useMemo(() => {
    return {
      fontSize: typeAQuestionFontSize,
    };
  }, [typeAQuestionFontSize]);

  const frame3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameBackgroundColor,
      border: frameBorder,
      height: frameHeight,
      padding: framePadding,
    };
  }, [frameBackgroundColor, frameBorder, frameHeight, framePadding]);

  const exampleemailcomStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: exampleemailcomFontSize,
    };
  }, [exampleemailcomFontSize]);

  const error1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: errorFontSize,
    };
  }, [errorFontSize]);

  return (
    <div className={styles.email} style={emailStyle}>
      <b className={styles.typeAQuestion} style={typeAQuestion3Style}>
        {typeAQuestion}
      </b>
      <div className={styles.frame} style={frame3Style}>
        <div className={styles.exampleemailcom} style={exampleemailcomStyle}>
          example@email.com
        </div>
      </div>
      <div className={styles.error} style={error1Style}>
        Error
      </div>
    </div>
  );
};

export default Email;
