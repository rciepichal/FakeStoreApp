import { Box } from '@mui/material';
import AboutSection from '../components/home/AboutSection';
import HeroBanner from '../components/home/HeroBanner';
import NewestProducts from '../components/home/NewestProducts';
import TopPick from '../components/home/TopPick';

const Home = () => {
  return (
    <>
      <TopPick />
      <HeroBanner />
      <AboutSection />
      <NewestProducts />
    </>
  );
};

export default Home;
