import { FunctionComponent } from "react";
import styles from "./CommunicationForm.module.css";

const CommunicationForm: FunctionComponent = () => {
  return (
    <div className={styles.ndSection}>
      <div className={styles.identifyWithMeContainer}>
        <span className={styles.identifyWithMeContainer1}>
          <span className={styles.identifyWith}>{`Identify With `}</span>
          <span className={styles.me}>Me?</span>
        </span>
      </div>
      <div className={styles.communication}>Communication</div>
      <div className={styles.div}>+18</div>
      <div className={styles.div1}>+31</div>
      <div className={styles.div2}>+326</div>
      <div className={styles.div3}>+731</div>
      <div className={styles.coffees}>Coffees</div>
      <div className={styles.meeting}>Meeting</div>
      <div className={styles.projects}>Projects</div>
      <div className={styles.clients}>Clients</div>
      <img className={styles.logo072Icon} alt="" src="/logo07-2@2x.png" />
      <img className={styles.logo073Icon} alt="" src="/logo07-2@2x.png" />
      <img className={styles.logo074Icon} alt="" src="/logo07-2@2x.png" />
      <img className={styles.logo075Icon} alt="" src="/logo07-2@2x.png" />
      <div className={styles.adaptability}>Adaptability</div>
      <div className={styles.empathy}>Empathy</div>
      <div className={styles.with4YearsContainer}>
        <span>{`With `}</span>
        <span className={styles.span}>4</span>
        <span>
          {" "}
          years deep in the game, I've mastered the art of blending marketing
          wizardry with some seriously cool self-taught design skills. While my
          playground is mostly digital, I'm all about those face-to-face vibes
          because that's where the magic happens. So, let's dive into a space
          where strategy meets design, and we'll whip up some seriously
          impactful campaigns together. Excited to chat and make things happen!
        </span>
      </div>
      <div className={styles.creativity}>Creativity</div>
      <div className={styles.resilience}>Resilience</div>
      <img className={styles.layer1Icon} alt="" src="/layer-11.svg" />
      <div className={styles.me023Wrapper}>
        <img className={styles.me023Icon} alt="" src="/me02-3@2x.png" />
      </div>
      <img className={styles.me022Icon} alt="" src="/me02-2@2x.png" />
      <div className={styles.theCreativeMind}>
        The Creative Mind Behind the Scenes
      </div>
    </div>
  );
};

export default CommunicationForm;
