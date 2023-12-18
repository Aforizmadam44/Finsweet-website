const Discover = () => {
  return (
    <div className="container w-[80%] flex mx-auto my-28 gap-4">
      <div className="flex-1">
        <p className="text-lightBlue font-bold text-lg">Discover More</p>
        <h2 className="text-primary text-4xl w-[70%] font-bold my-8">
          Analyze your sales and marketing leads
        </h2>
        <p className="w-[70%]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua invidunt ut labore.
        </p>
      </div>
      <div className="flex-2">
        <div className="flex items-center justify-center gap-4 my-4">
          <img src="./discoverIcon1.svg" alt="" />
          <div>
            <p className="font-bold text-lg">Sales Tracking</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, quae?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 my-4">
          <img src="./discoverIcon2.svg" alt="" />
          <div>
            <p className="font-bold text-lg">Sales Tracking</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, quae?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 my-4">
          <img src="./discoverIcon3.svg" alt="" />
          <div>
            <p className="font-bold text-lg">Sales Tracking</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, quae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
