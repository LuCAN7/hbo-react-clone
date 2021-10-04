import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/Login';

export default function Home() {
  const globalState = useStateContext();
  const isLogged = false;
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push('/create');
    }

    // Use below return for cleanup function
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div>
      <Login />;
    </div>
  );
}
