import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Dropdown.module.css";

type DropdownType = {
  typeAQuestion?: string;
  frame?: string;

  /** Style props */
  dropdownWidth?: CSSProperties["width"];
  dropdownGap?: CSSProperties["gap"];
  typeAQuestionFontSize?: CSSProperties["fontSize"];
  frameBackgroundColor?: CSSProperties["backgroundColor"];
  frameBorder?: CSSProperties["border"];
  frameHeight?: CSSProperties["height"];
  framePadding?: CSSProperties["padding"];
  selectOptionFontSize?: CSSProperties["fontSize"];
  frameIconTop?: CSSProperties["top"];
  frameIconRight?: CSSProperties["right"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
};

const Dropdown: FunctionComponent<DropdownType> = ({
  typeAQuestion,
  frame,
  dropdownWidth,
  dropdownGap,
  typeAQuestionFontSize,
  frameBackgroundColor,
  frameBorder,
  frameHeight,
  framePadding,
  selectOptionFontSize,
  frameIconTop,
  frameIconRight,
  frameIconWidth,
  frameIconHeight,
}) => {
  const dropdownStyle: CSSProperties = useMemo(() => {
    return {
      width: dropdownWidth,
      gap: dropdownGap,
    };
  }, [dropdownWidth, dropdownGap]);

  const typeAQuestionStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: typeAQuestionFontSize,
    };
  }, [typeAQuestionFontSize]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameBackgroundColor,
      border: frameBorder,
      height: frameHeight,
      padding: framePadding,
    };
  }, [frameBackgroundColor, frameBorder, frameHeight, framePadding]);

  const selectOptionStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: selectOptionFontSize,
    };
  }, [selectOptionFontSize]);

  const frameIconStyle: CSSProperties = useMemo(() => {
    return {
      top: frameIconTop,
      right: frameIconRight,
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconTop, frameIconRight, frameIconWidth, frameIconHeight]);

  return (
    <div className={styles.dropdown} style={dropdownStyle}>
      <b className={styles.typeAQuestion} style={typeAQuestionStyle}>
        {typeAQuestion}
      </b>
      <div className={styles.frame}>
        <div className={styles.frame1} style={frameStyle}>
          <div className={styles.selectOption} style={selectOptionStyle}>
            Select Option
          </div>
        </div>
        <img
          className={styles.frameIcon}
          alt=""
          src={frame}
          style={frameIconStyle}
        />
      </div>
    </div>
  );
};

export default Dropdown;
