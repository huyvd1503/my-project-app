import { useEffect } from 'react';
import { getProvider } from '../services/provider.api.ts';

const Home = () => {
  useEffect(() => {
    getProvider()
      .then(res => {
        console.log('Provider Data:', res);
      })
      .catch(error => {
        console.error('Error fetching provider data:', error);
      });
  }, []);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content area of the home page.</p>
    </div>
  );
};
export default Home;
