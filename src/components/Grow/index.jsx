import Button from "../Button";

const Grow = () => {
  return (
    <div className=" mx-auto my-20 gap-4 justify-between   lg:w-[60%] xl:w-[80%] xl:flex ">
      <div className="sm:w-[100%]">
        <h2 className="text-5xl font-bold">
          Satışlarınızı və xidmətlərinizi inkişaf etdirin
        </h2>
        <p className="my-10">
          Bizimlə əməkdaşlıq edərək satış və digər bazar iqtisadiyyatı
          əməliyyatlarınızı optimal şəkildə inkişaf etdirin.{" "}
        </p>
        <div className="buttons flex gap-2">
          <Button title={"Başlayın"} color={"text-slate-50"} />
          <Button
            title={"Əlaqə yaradın"}
            bg={"bg-slate-50"}
            color={"text-primary"}
          />
        </div>
      </div>
      <img src="./dash.png" alt="" className="w-[50%]" />
    </div>
  );
};

export default Grow;
