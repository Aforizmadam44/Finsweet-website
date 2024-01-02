import { TypeAnimation } from "react-type-animation";
import Button from "../Button";
import PlanCards from "../PlanCards";

const Ready = () => {
  return (
    <div className="container flex flex-col my-28 text-center">
      <p className="text-4xl font-semibold  mx-auto ">
        Biznesinizi bizimlə böyütməyə hazırsınız?
      </p>
      <TypeAnimation
        className="my-6"
        sequence={[
          "  Elə isə ",
          200,
          "başlanğıc, ",
          200,
          "standart və platinium",
          200,
          "paketlərə nəzər edin:",
          200,
          "Elə isə başlanğıc, standart və platinium paketlərə nəzər edin:",
          500,
        ]}
        style={{ fontSize: "1em" }}
        repeat={Infinity}
      />

      <Button
        title={"Qiymətləri gör"}
        to={"/pricing"}
        color={"text-slate-50"}
        onClick={<PlanCards />}
      />
    </div>
  );
};

export default Ready;
