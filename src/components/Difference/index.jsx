import { Link } from "react-router-dom";
const Difference = () => {
  return (
    <div className="container w-[80%] flex mx-auto my-28">
      <div className="flex-1">
        <p className="text-lightBlue font-bold text-lg">
          Why should you work with us?
        </p>
        <h2 className="text-primary text-4xl w-[70%] font-bold my-8">
          To upscale your business to the next level
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum.
        </p>
      </div>
      <div className="flex-2 flex gap-5 flex-col mt-8">
        <div className="goToLink flex gap-2 center justify-center">
          <Link>
            <img src="./IconGoTo.svg" alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non?
          </p>
        </div>
        <div className="goToLink flex gap-2 center justify-center">
          <Link>
            <img src="./IconGoTo.svg" alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non?
          </p>
        </div>
        <div className="goToLink flex gap-2 center justify-center">
          <Link>
            <img src="./IconGoTo.svg" alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Difference;
