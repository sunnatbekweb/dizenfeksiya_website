import "./style.scss";
import Rectangle1 from "../../../assets/images/Rectangle1.svg";
import Rectangle2 from "../../../assets/images/Rectangle2.svg";
import Rectangle3 from "../../../assets/images/Rectangle3.svg";
import Card from "../../Card";

const Advantages = () => {
  interface Item {
    image: string;
    title: string;
    text: string;
  }
  const data: Item[] = [
    {
      image: Rectangle1,
      title: "Tezda xizmat ko'rsatish",
      text: "Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
    },
    {
      image: Rectangle2,
      title: "Yetuk mutahasislaimiz",
      text: "Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
    },
    {
      image: Rectangle3,
      title: "Sizga maqul vaqtda",
      text: "Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
    },
  ];
  return (
    <section id="advantages">
      <div className="adv_wrapper">
        <h2 className="adv_title">Avfzalliklarimiz</h2>

        <div className="adv_card-wrapper">
          {data.map((item: Item, index: number) => (
            <Card
              image={item.image}
              title={item.title}
              text={item.text}
              key={index}
            />
          ))}
        </div>

        <div className="clean_h">
          <div className="clean_h-text">
            <h3>Klapa va zararli hashorot endi yo’q deb hisoblang !!!</h3>
            <p>
              Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
              kompaniyamiz Mijozlarimiz bizdan mamnun
            </p>
          </div>
          <button>Bog'lanish</button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
