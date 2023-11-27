import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Variant8.module.css";

type Property1Variant8Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propTop1?: CSSProperties["top"];
};

const Property1Variant8: FunctionComponent<Property1Variant8Type> = ({
  propTop,
  propLeft,
  propTop1,
}) => {
  const property1Variant8Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const socialMediaDesignContainerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  return (
    <div className={styles.property1variant8} style={property1Variant8Style}>
      <i
        className={styles.socialMediaDesignContainer}
        style={socialMediaDesignContainerStyle}
      >
        <span className={styles.socialMediaDesignContainer1}>
          <p className={styles.socialMedia}>Social Media</p>
          <p className={styles.socialMedia}>Design</p>
          <p className={styles.socialMedia}>Google/Meta Ads</p>
          <p className={styles.socialMedia}>E-Mail Marketing</p>
          <p className={styles.socialMedia}>SEO</p>
          <p className={styles.socialMedia}>Copywriting</p>
          <p className={styles.socialMedia}>Public Relations</p>
          <p className={styles.socialMedia1}>Social Media</p>
        </span>
      </i>
    </div>
  );
};

export default Property1Variant8;
