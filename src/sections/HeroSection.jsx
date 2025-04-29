import imgHero from "../assets/images/imgHero.png";
import bgHero from "../assets/images/svg/bgHero.svg";
import mobilebgHero from "../assets/images/svg/mobilehero.svg";

export default function HeroSection() {
  return (
    <section className="px-9 md:px-40 py-30 md:py-50 flex justify-center flex-col">
      <main className="relative flex justify-center items-center flex-col gap-8">
        <img
          src={bgHero}
          alt="bgHero"
          className="absolute bottom-[-250px] hidden md:block"
        />
        <img
          src={mobilebgHero}
          alt="bgHero"
          className="absolute bottom-[-40px] block md:hidden"
        />
        <h1 className="text-[22px] font-medium md:text-6xl text-center">
          Abadikan <br className="block md:hidden" /> Momenmu Tanpa Batas
        </h1>
        <p className="text-center text-[13px] md:text-[20px] mt-[-10px] md:mt-0">
          Spesialis fotografi produk, dokumentasi acara pengajian, sekolah, dan{" "}
          <br className="hidden   md:block" />
          kebutuhan visual lainnya. Profesional. Simple. Terjangkau.
        </p>
        <a
          href="mailto:brodyhitgap@gmail.com"
          className="bg-[#556b2f] text-[13px] md:text-[19px] text-white px-10 md:px-14 py-2 md:py-4 rounded-full hover:bg-[#455a1f] mt-5 relative z-2"
        >
          Bokking Sekarang
        </a>
      </main>
      <img src={imgHero} alt="imgHero" className="mt-10 md:mt-5 relative z-1" />
    </section>
  );
}
