import AnimatedWrapper from "../components/AnimateWrapper";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import HotCollection from "../components/HotCollection";
import Sponsers from "../components/Sponsers";
import TabsComponent from "../components/Tabs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="w-full md:max-w-7xl lg:px-2">
        <Banner />
        <Gallery />
        <TabsComponent />
        <Sponsers />
        <AnimatedWrapper>
          <HotCollection />
        </AnimatedWrapper>
      </div>
      <Footer />
    </>
  );
};

export default Home;
