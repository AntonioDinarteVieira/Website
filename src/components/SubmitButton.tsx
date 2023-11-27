import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubmitButton.module.css";

type SubmitButtonType = {
  /** Style props */
  submitButtonBorderRadius?: CSSProperties["borderRadius"];
  submitButtonHeight?: CSSProperties["height"];
  submitButtonPadding?: CSSProperties["padding"];
  submitFontSize?: CSSProperties["fontSize"];
};

const SubmitButton: FunctionComponent<SubmitButtonType> = ({
  submitButtonBorderRadius,
  submitButtonHeight,
  submitButtonPadding,
  submitFontSize,
}) => {
  const submitButtonStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: submitButtonBorderRadius,
      height: submitButtonHeight,
      padding: submitButtonPadding,
    };
  }, [submitButtonBorderRadius, submitButtonHeight, submitButtonPadding]);

  const submitStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: submitFontSize,
    };
  }, [submitFontSize]);

  return (
    <div className={styles.submitButton} style={submitButtonStyle}>
      <div className={styles.submit} style={submitStyle}>
        Submit
      </div>
    </div>
  );
};

export default SubmitButton;
