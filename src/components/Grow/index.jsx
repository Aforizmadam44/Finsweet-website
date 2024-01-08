import Button from "../Button";

const Grow = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);

    history.push("/contact");
  };
  return (
    <div className="mx-auto my-20 gap-4 justify-between container text-center p-6 ">
      <h2 className="text-5xl font-bold">
        Satışlarınızı və xidmətlərinizi inkişaf etdirin
      </h2>
      <p className="my-10">
        Bizimlə əməkdaşlıq edərək satış və digər bazar iqtisadiyyatı
        əməliyyatlarınızı optimal şəkildə inkişaf etdirin.{" "}
      </p>
      <div className="buttons flex gap-2 justify-center w-full">
        <Button
          title={"Başlayın"}
          color={"text-slate-50"}
          to={"/pricing"}
          onClick={handleLinkClick}
        />
        <Button
          title={"Əlaqə yaradın"}
          to={"/contact"}
          onClick={handleLinkClick}
          bg={"bg-slate-50"}
          color={"text-primary"}
        />
      </div>
    </div>
  );
};

export default Grow;
