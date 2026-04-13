'use client';

import { Register_STEPS } from '@/lib/constants/register.constant';
import { RegisterSteps } from '@/lib/types/register-steps';
import { useState } from 'react';
import RegisterCodeVerify from './register-code-verify';
import RegisterEmailVerify from './register-email-verify';
import RegisterForm from './register-form';

export default function RegisterLayout() {
  const [step, setStep] = useState<RegisterSteps>(Register_STEPS.email);

  const steps = {
    [Register_STEPS.email]: {
      regis: <RegisterEmailVerify setStep={setStep} />,
    },
    [Register_STEPS.verify]: {
      regis: <RegisterCodeVerify setStep={setStep} />,
    },
    [Register_STEPS.register]: {
      regis: <RegisterForm />,
    },
  };

  return <>{steps[step].regis}</>;
}
