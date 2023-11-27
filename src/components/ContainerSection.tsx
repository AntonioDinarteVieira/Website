import { FunctionComponent } from "react";
import Property1Variant2 from "./Property1Variant2";
import styles from "./ContainerSection.module.css";

const ContainerSection: FunctionComponent = () => {
  return (
    <div className={styles.thSection}>
      <div className={styles.makingFriendsAlong}>
        Making friends along the way!
      </div>
      <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.herbalife1Icon} alt="" src="/herbalife-1@2x.png" />
      <div className={styles.thSectionChild} />
      <div className={styles.thSectionItem} />
      <img className={styles.lonasEra011} alt="" src="/lonas-era01-1@2x.png" />
      <div className={styles.thSectionInner} />
      <div className={styles.layer1}>
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        <div className={styles.group}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle@2x.png"
          />
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
          <img
            className={styles.rectangleIcon2}
            alt=""
            src="/rectangle2@2x.png"
          />
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="/rectangle3@2x.png"
          />
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="/rectangle4@2x.png"
          />
          <img
            className={styles.rectangleIcon5}
            alt=""
            src="/rectangle5@2x.png"
          />
          <img
            className={styles.rectangleIcon6}
            alt=""
            src="/rectangle6@2x.png"
          />
          <img
            className={styles.rectangleIcon7}
            alt=""
            src="/rectangle7@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.anunciosFinancestar}>
        <img className={styles.anncio11} alt="" src="/anncio-1-1@2x.png" />
        <img className={styles.anncio21} alt="" src="/anncio-2-1@2x.png" />
        <img className={styles.anncio31} alt="" src="/anncio-3-1@2x.png" />
        <img className={styles.post1Icon} alt="" src="/post-1@2x.png" />
      </div>
      <div className={styles.thSectionChild1} />
      <div className={styles.thSectionChild2} />
      <div className={styles.thSectionChild3} />
      <img className={styles.frameIcon} alt="" src="/frame1@2x.png" />
      <div className={styles.thSectionChild4} />
      <div className={styles.thSectionChild5} />
      <div className={styles.postsIvbam}>
        <img
          className={styles.ivbamPostsNormais161}
          alt=""
          src="/ivbam-posts-normais16-1@2x.png"
        />
        <img
          className={styles.ivbamPostsNormais03}
          alt=""
          src="/ivbam-posts-normais03@2x.png"
        />
        <img
          className={styles.ivbamPostsNormais11}
          alt=""
          src="/ivbam-posts-normais11@2x.png"
        />
        <img
          className={styles.ivbamPostsNormais17}
          alt=""
          src="/ivbam-posts-normais17@2x.png"
        />
        <img
          className={styles.ivbamPostsNormais19}
          alt=""
          src="/ivbam-posts-normais19@2x.png"
        />
        <img
          className={styles.ivbamPostsNormais22}
          alt=""
          src="/ivbam-posts-normais22@2x.png"
        />
      </div>
      <div className={styles.thSectionChild6} />
      <div className={styles.whereIdeasCome}>Where Ideas Come to Life</div>
      <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
      <Property1Variant2
        propTop="432px"
        propLeft="845px"
        propAlignItems="center"
        propJustifyContent="flex-start"
        propHeight="unset"
        propWidth="unset"
        propRight="unset"
        propBottom="unset"
        propBackground="linear-gradient(180deg, #ffff33, #191919 82.29%)"
        propLeft1="22.4px"
        propWidth1="36.8px"
        propHeight1="26.3px"
      />
    </div>
  );
};

export default ContainerSection;
