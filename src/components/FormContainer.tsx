import { FunctionComponent } from "react";
import Property1Variant8 from "./Property1Variant8";
import Property1DefaultIcon1 from "./Property1DefaultIcon1";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.stSection}>
      <div className={styles.whatImGoing}>What I’m going to do for you</div>
      <div className={styles.stSectionChild} />
      <img className={styles.logo052Icon} alt="" src="/logo05-21@2x.png" />
      <div className={styles.dinartevieira}>
        <span className={styles.dinartevieiraTxt}>
          <span>Dinarte</span>
          <span className={styles.vieira}>Vieira</span>
        </span>
      </div>
      <div className={styles.wordPlayHeroSection}>
        <div className={styles.design}>Design</div>
        <div className={styles.seo}>SEO</div>
        <div className={styles.eMailMarketing}>E-mail Marketing</div>
        <div className={styles.copywriting}>Copywriting</div>
        <div className={styles.publicRelations}>Public Relations</div>
        <div className={styles.googlemetaAds}>Google/Meta Ads</div>
        <div className={styles.socialMedia}>Social Media</div>
      </div>
      <Property1Variant8 propTop="413px" propLeft="440px" propTop1="40px" />
      <Property1DefaultIcon1 propTop="781px" propLeft="0px" />
      <div className={styles.stSectionItem} />
    </div>
  );
};

export default FormContainer;
