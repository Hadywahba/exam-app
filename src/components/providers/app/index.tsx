import CorrectAnsweProvider from './components/correct-answer.provider';
import NextAuthProvider from './components/next-auth.provider';
import ReactQueryProvider from './components/react-query-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <CorrectAnsweProvider>
        {children}
        </CorrectAnsweProvider>
        </NextAuthProvider>
    </ReactQueryProvider>
  );
}
