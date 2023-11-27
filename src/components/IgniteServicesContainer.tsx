import { FunctionComponent } from "react";
import styles from "./IgniteServicesContainer.module.css";

const IgniteServicesContainer: FunctionComponent = () => {
  return (
    <div className={styles.rdSection}>
      <div className={styles.servicesToIgnite}>
        Services to Ignite Your Imagination
      </div>
      <div className={styles.whatAreYou}>What are you missing?</div>
      <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      <div className={styles.serviosWrapper}>
        <div className={styles.servios}>
          <div className={styles.socialMedia}>
            <p className={styles.social}>Social</p>
            <p className={styles.social}>Media</p>
          </div>
          <div className={styles.imGonnaHandle}>
            I’m gonna handle the nitty-gritty of content creation, scheduling,
            and engagement across platforms, ensuring your brand shines in the
            digital spotlight. Boost your social media game, leaving you free to
            focus on what you do best – running your business.
          </div>
          <div className={styles.design}>Design</div>
          <div className={styles.igniteYourBrands}>
            Ignite your brand's visual! From striking logos to eye-catching
            marketing materials, I bring your ideas to life. Let's turn your
            vision into a captivating visual story!
          </div>
          <div
            className={styles.amplifyYourBrands}
          >{`Amplify your brand's narrative with press releases to securing media coverage. Navigate the PR landscape to ensure your brand's voice is heard. Management of your image, handling crises with finesse, and cultivate positive relationships with the public and media. `}</div>
          <div className={styles.publicRelations}>
            <span className={styles.publicRelationsTxtContainer}>
              <p className={styles.social}>Public</p>
              <p className={styles.social}>Relations</p>
            </span>
          </div>
          <div className={styles.seo}>SEO</div>
          <div className={styles.iSpecializeIn}>
            I specialize in optimizing your digital presence to ensure your
            business stands out in search engine results. From strategic keyword
            planning to technical SEO enhancements. Boost your rankings and
            drive organic traffic.
          </div>
          <div className={styles.googlemetaAds}>
            <span className={styles.publicRelationsTxtContainer}>
              <p className={styles.social}>Google/Meta</p>
              <p className={styles.social}>Ads</p>
            </span>
          </div>
          <div className={styles.craftTargetedAnd}>
            Craft targeted and compelling ad campaigns that put your brand front
            and center. From strategic keyword selection to eye-catching ad
            creatives, let’s optimize every element for maximum impact. Drive
            clicks, capture attention, and watch your conversions soar.
          </div>
          <div className={styles.unlockThePower}>
            Unlock the power of personalized communication creating and
            executing targeted e-mail campaigns that resonate with your
            audience. From attention-grabbing subject lines to compelling
            content crafting emails designed to engage and convert.
          </div>
          <div className={styles.eMailMarketing}>E-mail Marketing</div>
          <div className={styles.transformYourMessage}>
            Transform your message into a magnetic force crafting words that
            captivate, compel, and convert. From engaging website content to
            persuasive marketing copy, our wordsmiths are here to tell your
            brand story in a way that resonates.
          </div>
          <div className={styles.copywriting}>Copywriting</div>
          <div className={styles.icons}>
            <img
              className={styles.onlineAdvertisingIcon}
              alt=""
              src="/onlineadvertising@2x.png"
            />
            <img className={styles.seoIcon} alt="" src="/seo@2x.png" />
            <img
              className={styles.socialMediaIcon}
              alt=""
              src="/socialmedia@2x.png"
            />
            <img
              className={styles.webDesignIcon}
              alt=""
              src="/webdesign@2x.png"
            />
            <img
              className={styles.copywriterIcon}
              alt=""
              src="/copywriter@2x.png"
            />
            <img
              className={styles.emailMarketingIcon}
              alt=""
              src="/emailmarketing@2x.png"
            />
            <img
              className={styles.handshakeIcon}
              alt=""
              src="/handshake@2x.png"
            />
          </div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
    </div>
  );
};

export default IgniteServicesContainer;
