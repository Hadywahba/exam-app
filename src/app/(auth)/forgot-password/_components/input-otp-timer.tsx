'use client';

import { useId } from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useTimer } from '@/hooks/use-timer';
import { UseForgot } from '../_hooks/use-forgot-password';
import { useToast } from '@/hooks/use-toast';

interface InputOTPWithResendTimerDemoProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  email: string;
}
const InputOTPWithResendTimerDemo = ({
  value,
  onChange,
  onBlur,
  email,
}: InputOTPWithResendTimerDemoProps) => {
  // Toast
  const { toast } = useToast();

  // Mutation
  const { forgot } = UseForgot({ redirect: false });

  //  hooks
  const id = useId();
  const { resetTimer, timeLeft } = useTimer({ initialSeconds: 60 });

  //  functions
  const resendOtp = () => {
    forgot(
      { email },
      {
        onSuccess: () => {
          toast({
            title: '✅ OTP sent to your email',
            variant: 'success',
          });

          resetTimer();
        },
      },
    );
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-3">
      {/* Input */}
      <div className="flex items-center justify-center gap-8">
        <InputOTP
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          maxLength={6}
        >
          <InputOTPGroup>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Timer */}
      <p
        className={`mx-auto py-6 text-center text-sm font-medium text-gray-500`}
      >
        {timeLeft > 0 ? (
          <>
            You can request another code in:{''}
            <span className={timeLeft < 6 ? 'text-red-500' : 'text-gray-500'}>
              {timeLeft}
            </span>
          </>
        ) : (
          <p className="text-sm font-medium text-gray-500">
            {' '}
            Didn’t receive the code?{' '}
            <button onClick={resendOtp} className="text-blue-600 underline">
              Resend
            </button>
          </p>
        )}
      </p>
    </div>
  );
};

export default InputOTPWithResendTimerDemo;
