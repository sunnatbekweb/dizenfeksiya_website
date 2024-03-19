import "./style.scss";
import IntroImage from "../../../assets/images/disinfection-services.jpg";
import IntroIcon from "../../../assets/images/intro_image.png";

const Intro = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="text">
          <div className="top">
            <h2>Dizenfeksiya xizmati</h2>
            <p>
              Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
              kompaniyamiz Mijozlarimiz bizdan mamnun
            </p>
          </div>
          <div className="bottom">
            <button>Bog'lanish</button>
            <button>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 26V2M26 2H2M26 2L2 26"
                  stroke="#1D68F9"
                  stroke-width="3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="image">
          <img className="intro_icon" src={IntroIcon} alt="Intro icon" />
          <img className="intro_image" src={IntroImage} alt="Intro image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
