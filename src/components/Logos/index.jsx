import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandsSlider = ({ className }) => {
  const settings = {
    infinite: true, // Sonsuz döngü etkinleştirildi
    slidesToShow: 5, // Aynı anda görünen SVG sayısı
    slidesToScroll: 1, // Kaydırma işlemi sırasında kaç SVG'nin ilerleyeceği
    autoplay: true, // Otomatik oynatma etkinleştirildi
    autoplaySpeed: 1000, // Otomatik oynatma hızı (ms cinsinden)
  };

  return (
    <div
      className={`container w-100 my-20 py-12 align-items-center ${className}`}
    >
      <Slider {...settings}>
        <div>
          <img src="./Logo1.png" alt="" />
        </div>
        <div>
          <img src="./Logo2.png" alt="" />
        </div>
        <div>
          <img src="./Logo3.png" alt="" />
        </div>
        <div>
          <img src="./Logo4.png" alt="" />
        </div>
        <div>
          <img src="./Logo5.png" alt="" />
        </div>
        <div>
          <img src="./Logo1.png" alt="" />
        </div>
        <div>
          <img src="./Logo2.png" alt="" />
        </div>
        <div>
          <img src="./Logo3.png" alt="" />
        </div>
        <div>
          <img src="./Logo4.png" alt="" />
        </div>
        <div>
          <img src="./Logo5.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default BrandsSlider;
