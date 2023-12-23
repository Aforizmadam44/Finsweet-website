import BigCard from "../BigCard";

const Insights = () => {
  return (
    <div className="my-20 w-[80%] mx-auto flex flex-cols-2 items-center justify-between">
      <div className="flex-2 sm:block">
        <p className="text-lightBlue font-bold text-lg">
          Marketinq anlayışları
        </p>
        <p className="text-4xl font-bold my-6">
          Məlumata əsaslanan müştəri rəyi
        </p>
        <p>
          Aparılan araşdırmalar zamanı aşikarlanmışdır ki, müştərilərin bazar
          iqtisadiyyatında müsbət yöndə irəliləməsi üçün labüd addımlar
          sayəsində gəlir indeksi getdikcə artmış, xərclər isə maksimum dərəcədə
          azalmışdır.
        </p>
      </div>
      <div className="flex-2 shadow-xl rounded-xl p-6 sm:block">
        <BigCard />
      </div>
    </div>
  );
};

export default Insights;
