import React, { useState } from "react";
import styles from "./Register.module.css";
import Card from "../../components/shared/card/Card";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepName from "../Steps/StepName/StepName";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepUsername from "../Steps/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = ({ OnNext }) => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  return (
    <div>
      <Step OnNext={() => setStep(step + 1)} />
      <Card />
    </div>
  );
};

export default Register;
