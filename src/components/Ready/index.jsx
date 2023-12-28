// Ready.js

import Button from "../Button";
import PlanCards from "../PlanCards";

const Ready = () => {
  return (
    <div className="container my-28 text-center">
      <p className="text-4xl font-semibold w-[40%] mx-auto">
        Biznesinizi bizimlə böyütməyə hazırsınız?
      </p>
      <p className="my-6">
        Elə isə başlanğıc standart və platinium paketlərə nəzər edin:
      </p>
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
