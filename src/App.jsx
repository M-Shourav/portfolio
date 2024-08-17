import Banner from "./ul/Banner";
import Header from "./ul/Header";
import About from "./ul/About";
import Experience from "./ul/Experience";
import Project from "./ul/Project";
import Contact from "./ul/Contact";
import Archive from "./ul/Archive";
import ScrollBtn from "./ul/ScrollBtn";

function App() {
  return (
    <div className="min-h-screen bg-primaryColor text-lightText font-bodyFont">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Project />
      <Archive />
      <Contact />
      <ScrollBtn />
      {/* LeftSide */}
      {/* RightSide */}
    </div>
  );
}

export default App;
