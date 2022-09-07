import MainHeader from "../components/Header";
import AboutUs from "../components/Homepage/AboutUs";
import HeroSection from "../components/Homepage/HeroSection";
import NewsAndBlogs from "../components/Homepage/NewsAndBlogs";
import Partners from "../components/Homepage/Partners";
import Projects from "../components/Homepage/Projects";
import Publication from "../components/Homepage/Publication";
import Testimony from "../components/Homepage/Testimony";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home({ newsAndBlogs }) {
  return (
    <>
      <MainHeader title="ECFF Home" />
      <Navbar />
      <HeroSection />
      <Projects />
      <AboutUs />
      <Publication />
      <Testimony />
      <NewsAndBlogs newsAndBlogs={newsAndBlogs} />
      <Partners />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04abf35fd24923ad803b12003dfda3");
  const result = await res.json();
  const filteredresult = result.articles
  filteredresult.splice(8)
  // we do this because one data is not have image

  return {
    props: {
      newsAndBlogs: filteredresult,
    }
  };
}