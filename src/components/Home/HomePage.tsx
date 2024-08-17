import About from "../About/About";
import Blog from "../Blog/Blog";
import Carousal from "./Carousal";

const HomePage = () => {
  return (
    <div>
      <Carousal />
      <Blog />
      <About />
    </div>
  );
};

export default HomePage;
