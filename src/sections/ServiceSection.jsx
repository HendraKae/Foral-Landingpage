import bgLayanan from "../assets/images/bgLayanan.png";
import iconCamera from "../assets/images/svg/icon/iconCamera.svg";
import iconProfile from "../assets/images/svg/icon/iconProfile.svg";
import iconEdit from "../assets/images/svg/icon/iconEdit.svg";
import crsorCustom from "../assets/images/cursorCustom.png";

export default function Service() {
  return (
    <section
      className="relative bg-[#556b2f] mt-[-60px] md:mt-[-200px] px-10 "
      style={{
        cursor: `url(${crsorCustom}), auto`,
      }}
    >
      <div
        className="absolute right-0 w-full h-[230%] bottom-[-90px] md:bottom-0 bg-no-repeat bg-right bg-contain z-[-1]"
        style={{ backgroundImage: `url(${bgLayanan})` }}
      ></div>
      <h1 className="text-white font-medium text-center text-2xl md:text-5xl md:pt-20">
        Layanan Kami
      </h1>
      <div className="flex justify-center items-center gap-10 mt-10 md:mt-30 pb-35 md:pb-0 flex-col md:flex-row">
        <div className="w-full md:w-[inherit] p-7 md:p-12 bg-white flex justify-start items-start flex-col gap-5 rounded-xl transition-transform duration-300 hover:scale-105">
          <img src={iconCamera} alt="" className="w-[20%] md:w-[30%]" />
          <h1 className="font-medium text-[20px] md:text-2xl">
            Product <br /> Photography
          </h1>
          <p className="font-light text-[14px] md:text-[17px]">
            Foto produk estetik untuk <br /> katalog, marketplace, dan brand.
          </p>
        </div>

        <div className="w-full md:w-[inherit] p-7 pr-13 md:p-12 bg-white flex justify-start items-start flex-col gap-5 rounded-xl transition-transform duration-300 hover:scale-105">
          <img src={iconProfile} alt="" className="w-[20%] md:w-[30%]" />
          <h1 className="font-medium text-[20px] md:text-2xl">
            Portrait & Profile <br /> Photo
          </h1>
          <p className="font-light text-[14px] md:text-[17px]">
            Foto studio untuk keperluan <br />
            profesional dan media sosial.
          </p>
        </div>

        <div className="w-full md:w-[inherit] p-7 pr-13 md:p-12 bg-white flex justify-start items-start flex-col gap-5 rounded-xl transition-transform duration-300 hover:scale-105">
          <img src={iconEdit} alt="" className="w-[20%] md:w-[30%]" />
          <h1 className="font-medium text-[20px] md:text-2xl">
            Photo <br />
            Retouching
          </h1>
          <p className="font-light text-[14px] md:text-[17px]">
            Editing profesional buat hasil <br />
            lebih bersih dan menarik.
          </p>
        </div>
      </div>
    </section>
  );
}
