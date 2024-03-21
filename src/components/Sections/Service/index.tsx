import "./style.scss";
import Desinfection1 from "../../../assets/images/dizinfeksiya-1.png";
import Desinfection2 from "../../../assets/images/dezinyeksiya-2.png";
import Desinfection3 from "../../../assets/images/derazatsiya-3.png";
import ServiceCard from "../../Cards/ServiceCard";
import ServiceImg from "../../../assets/images/service_img.jpeg";
import serviceIcon from "../../../assets/images/3dicon.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  interface Item {
    image: string;
    title: string;
    text: string;
  }
  const data: Item[] = [
    {
      image: Desinfection1,
      title: "Dezinfektsiya - zararli mikroorganizmlarni yo'q qilish ",
      text: "Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва касалликларга олиб келиши мумкин бўлган хавфли микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.",
    },
    {
      image: Desinfection2,
      title: "Dezinseksiya - umumiy disinseksiya",
      text: "Кўп одамлар биринчи навбатда 'дезинфестатсия' сўзини исталмаган қўшниларидан - чойшаблар, ҳамамбöcеклер, чумолилар ва бошқа ҳашаротлардан халос бўлиш ёлини қидирганда дуч келишади. Уларнинг ўзлари йўқимсиз ва улар ҳам маълум инфектсия ташувчилари. Дезинсексия - бу ҳашаротларни: чивинлар, чивинлар, чойшаблар, тараканлар, куя, шомил, қобиқ қўнғизлари, ёғоч битлари ва бошқа судралиб юрувчи ва учувчи жонзотларни йўқ қилиш. ",
    },
    {
      image: Desinfection3,
      title: "Deratizatsiya - kemiruvchilarni yo'q qilish",
      text: "Toshkentda deratizatsya kemiruvchilarni yo'q qilishga qaratilgan kompleks chora-tadbirlarning butun majmuasidir. Maulukki, kemiruvchilar juda ⱨattiⱨ zhonzotlar bo'lib, ular turli tizma havfli taisirlarga dosh beradilar. Shu uchun ularni yo'q qilish uchun bir qator usullardan foydalanish kerak. Deratizatsiya Toshkent shaҳrida kemiruvchilar paydo boʻlgan zhoilarda: коʻp qavatli uylar, omborlar, do'konlar, umumiy ovqatlanish korhonalari amalga oshiriladi.",
    },
  ];

  return (
    <section id="service">
      <div className="service_wrapper">
        <h2 data-aos="fade-right">Xizmatlar</h2>
        <p className="service_text" data-aos="flip-left">
          Biz sizga samarali va kafolatle yordam taklif etamiz.
        </p>

        <div className="service_card_wrapper">
          {data.map((item: Item, index: number) => (
            <ServiceCard
              image={item.image}
              title={item.title}
              text={item.text}
              key={index}
            />
          ))}
        </div>

        <div className="service_end">
          <img
            className="left_img"
            data-aos="zoom-in"
            src={ServiceImg}
            alt="Service image"
          />

          <div className="right_end">
            <div className="right_top">
              <img src={serviceIcon} alt="Service icon" data-aos="zoom-out" />
              <h5 data-aos="fade-left">
                Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
                talaygina
              </h5>
            </div>

            <button data-aos="flip-down">
              <a href="#contact">Bog'lanish</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
