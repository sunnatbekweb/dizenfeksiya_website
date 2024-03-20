import Advantages from "./Advantages";
import Contact from "./Contact";
import Faq from "./Faq";
import Intro from "./Intro/index";
import Service from "./Service/index";

const Sections = () => {
  return (
    <main>
      <Intro />
      <Advantages />
      <Service />
      <Faq />
      <Contact />
    </main>
  );
};

export default Sections;
