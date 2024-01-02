const Insights = () => {
  return (
    <div className="w-[80%] gap-16 mx-auto xl:grid xl:grid-cols-2 sm:grid sm:grid-cols-1 sm:space-y-6 items-center justify-between my-28">
      <div className="flex-2 sm:block">
        <p className="text-lightBlue font-bold text-lg">
          Marketinq anlayışları
        </p>
        <p className="text-4xl font-semibold my-6">
          Məlumata əsaslanan müştəri rəyi
        </p>
        <p className="">
          Aparılan araşdırmalar zamanı aşikarlanmışdır ki, müştərilərin bazar
          iqtisadiyyatında müsbət yöndə irəliləməsi üçün labüd addımlar
          sayəsində gəlir indeksi getdikcə artmış, xərclər isə maksimum dərəcədə
          azalmışdır.
        </p>
      </div>
      <div className="flex-2 shadow-xl rounded-xl p-6 sm:block">
        <img src="./frame2.png" alt="" />
      </div>
    </div>
  );
};

export default Insights;
