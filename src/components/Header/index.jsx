import Button from "../Button";

const Header = () => {
  return (
    <div className="container my-20 flex  text-center items-center flex-col gap-6 text-primary font-bold w-[60%] ">
      <h1 className="text-5xl font-semibold">
        Satışlarınızı və xidmətlərinizi inkişaf etdirmək üçün ən yaxşı proqram
      </h1>
      <p className="font-semibold text-slate-500">
        Bu proqram vasitəsiylə uzun illərin təcrübəsinə əsaslanaraq sizə unikal
        təkliflər və professional xidmətlər təqdim edirik, bizə qoşulun və
        perspektiv təminata sahiblənin.
      </p>
      <div className="inputAndBtn">
        <input
          type="email"
          placeholder="Enter your mail"
          className="border-slate-300 rounded-2xl my-6 w-96 h-16"
        />
        <Button
          title={"Ödənişsiz sına"}
          to={"./freeTrial"}
          color={"text-slate-50"}
          className="hover:bg-slate-100 hover:text-slate-100 rounded-xl"
        ></Button>
      </div>
    </div>
  );
};

export default Header;
