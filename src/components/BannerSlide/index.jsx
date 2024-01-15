import Slider from "react-slick";
import "./banner.css";

const BannerSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerContainer overflow-hidden shadow-2xl border-4 border-pvColor4 rounded-md ">
      <video autoPlay muted loop className="video-background">
        <source
          src="https://dma.gov.az/images/banner-video.mp4?v=3"
          type="video/mp4"
        />
      </video>

      <div className="content">
        <Slider
          {...settings}
          className="relative top-52 text-white text-center text-5xl w-[60%] mx-auto  "
        >
          <div>
            <h3>
              Qabaqcıl texnologiya ilə sadələşdirilmiş və daha səmərəli
              infrastruktura zəmanət veririk.
            </h3>
          </div>
          <div>
            <h3>
              Keyfiyyətli işçi qüvvəsi ilə maksimum xidmət yardımı göstəririk.
            </h3>
          </div>
          <div>
            <h3>Layiqli əməyin təminatı üçün çalışırıq.</h3>
          </div>
          <div>
            <h3>Formal məşğulluğu təmin edərək hüquqlarınızı qoruyuruq.</h3>
          </div>
          <div>
            <h3>
              Fəaliyyətə nəzarət və sistemliyin qorunması ilə ömürboyu dəstək
              imkanı yaradırıq.
            </h3>
          </div>
          <div>
            <h3>
              Sosial-iqtisadi fəaliyyəti düzgün istiqamətləndirib, perspektiv
              biznes planı qururuq.
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlide;
