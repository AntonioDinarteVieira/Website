import { FunctionComponent } from "react";
import ShortAnswer from "./ShortAnswer";
import Email from "./Email";
import Number1 from "./Number1";
import Paragraph from "./Paragraph";
import Dropdown from "./Dropdown";
import SubmitButton from "./SubmitButton";
import styles from "./FormContainer1.module.css";

const FormContainer1: FunctionComponent = () => {
  return (
    <div className={styles.thSection}>
      <div className={styles.callMeParent}>
        <div className={styles.callMe}>Call me:</div>
        <div className={styles.div}>(+351) 963 202 886</div>
      </div>
      <div className={styles.eMailParent}>
        <div className={styles.callMe}>E-mail:</div>
        <div className={styles.div}>antoniodinartevieira@gmail.com</div>
      </div>
      <div className={styles.adressParent}>
        <div className={styles.callMe}>Adress:</div>
        <div className={styles.div}>Funchal, Madeira</div>
      </div>
      <div className={styles.readyToChatContainer}>
        <span className={styles.dinartevieiraTxt}>
          <span>{`Ready to `}</span>
          <span className={styles.chat}>Chat?</span>
        </span>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.dinarteVieiraAll}>
        © 2024 Dinarte Vieira. All rights reserved.
      </div>
      <div className={styles.letsDoSomething}>Let’s do something amazing!</div>
      <div className={styles.formPage1}>
        <div className={styles.frame}>
          <ShortAnswer
            typeAQuestion="Name"
            shortAnswerWidth="606.6px"
            shortAnswerGap="15.55px"
            typeAQuestionFontSize="21.78px"
            frameBackgroundColor="#e2e2e2"
            frameBorder="1.6px solid var(--color-gainsboro-100)"
            frameHeight="62.2px"
            framePadding="0px 23.332130432128906px"
            typeHereFontSize="21.78px"
            errorFontSize="18.67px"
          />
          <Email
            typeAQuestion="Email"
            emailWidth="606.6px"
            emailGap="15.55px"
            typeAQuestionFontSize="21.78px"
            frameBackgroundColor="#e2e2e2"
            frameBorder="1.6px solid var(--color-gainsboro-100)"
            frameHeight="62.2px"
            framePadding="0px 23.332130432128906px"
            exampleemailcomFontSize="21.78px"
            errorFontSize="18.67px"
          />
          <Number1
            typeAQuestion="Phone Number"
            numberWidth="606.6px"
            numberGap="15.55px"
            typeAQuestionFontSize="21.78px"
            frameBackgroundColor="#e2e2e2"
            frameBorder="1.6px solid var(--color-gainsboro-100)"
            frameHeight="62.2px"
            framePadding="0px 23.332130432128906px"
            eg26FontSize="21.78px"
            errorFontSize="18.67px"
          />
          <Paragraph
            typeAQuestion="Description of your needs"
            paragraphWidth="606.6px"
            paragraphGap="15.55px"
            typeAQuestionFontSize="21.78px"
            frameBackgroundColor="#e2e2e2"
            frameBorder="1.6px solid var(--color-gainsboro-100)"
            frameHeight="186.7px"
            framePadding="23.332130432128906px"
            typeHereFontSize="21.78px"
          />
          <Dropdown
            typeAQuestion="My Services"
            frame="/frame.svg"
            dropdownWidth="606.6px"
            dropdownGap="15.55px"
            typeAQuestionFontSize="21.78px"
            frameBackgroundColor="#e2e2e2"
            frameBorder="1.6px solid var(--color-gainsboro-100)"
            frameHeight="62.2px"
            framePadding="0px 23.332130432128906px"
            selectOptionFontSize="21.78px"
            frameIconTop="calc(50% - 4.7px)"
            frameIconRight="21.8px"
            frameIconWidth="17.1px"
            frameIconHeight="10.9px"
          />
          <SubmitButton
            submitButtonBorderRadius="12.44px"
            submitButtonHeight="62.2px"
            submitButtonPadding="12.443802833557129px 31.109506607055664px"
            submitFontSize="21.78px"
          />
        </div>
      </div>
      <div className={styles.thSectionChild} />
      <img className={styles.logo052Icon} alt="" src="/logo05-2@2x.png" />
      <div className={styles.dinartevieira}>
        <span className={styles.dinartevieiraTxt}>
          <span>Dinarte</span>
          <span className={styles.vieira}>Vieira</span>
        </span>
      </div>
    </div>
  );
};

export default FormContainer1;
