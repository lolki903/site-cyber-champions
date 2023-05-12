import Themes from './Themes';
import '../dist/output.css'
import TestGame from './TestGame';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Banner from './Banner';
import Preven from './Preven';

function Home() {
  return (
    <>
  <Banner />
  <Preven />
  <Themes />
  <TestGame />
  <Newsletter />
  <Footer />
    </>
  );
}

export default Home;