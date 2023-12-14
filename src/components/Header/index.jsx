import Button from "../Button";

const Header = () => {
  return (
    <div className="my-14  text-primary font-bold w-[50%] mx-auto text-center ">
      <h1 className="text-4xl mb-6">
        Satışlarınızı və xidmətlərinizi inkişaf etdirmək üçün ən yaxşı proqram
      </h1>
      <p>
        Bu proqram vasitəsiylə uzun illərin təcrübəsinə əsaslanaraq sizə unikal
        təkliflər və professional xidmətlər təqdim edirik, bizə qoşulun və
        perspektiv təminata sahiblənin.
      </p>
      <div className="inputAndBtn  ">
        <input
          type="text"
          placeholder="Enter your mail"
          className="border-none rounded-md my-6 w-96 h-16"
        />
        <Button
          title={"Ödənişsiz sına"}
          className="hover:bg-slate-100 hover:text-slate-100 border-primary"
        ></Button>
      </div>
    </div>
  );
};

export default Header;
