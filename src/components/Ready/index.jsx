import Button from "../Button";

const Ready = () => {
  return (
    <div className="container my-24  text-center">
      <p className="text-4xl font-bold w-[40%] mx-auto">
        Biznesinizi bizimlə böyütməyə hazırsınız?
      </p>
      <p className="my-6">
        Elə isə başlangıc standart və platinium paketlərə nəzər edin:
      </p>
      <Button title={"Qiymətləri gör"} />
    </div>
  );
};

export default Ready;
