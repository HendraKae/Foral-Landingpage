import crsorCustom from "../assets/images/cursorCustom.png";

export default function About() {
  return (
    <>
      <section
        className="bg-[#556b2f] pb-30 px-48 pt-30 hidden md:block "
        id="about"
        style={{
          cursor: `url(${crsorCustom}), auto`,
        }}
      >
        <div className="flex justify-between items-center">
          <p className="w-1/2 text-gray-200 text-[20px]">
            Kami adalah tim fotografer profesional yang bergerak di bidang foto
            produk, dokumentasi kegiatan, dan berbagai kebutuhan fotografi
            lainnya. Dengan pengalaman dan dedikasi tinggi, kami siap
            menghadirkan hasil terbaik untuk setiap momen Anda.
          </p>
          <h1 className="text-white text-8xl font-light text-end">About Us</h1>
        </div>
      </section>
      <section
        className="bg-[#556b2f] pb-30 px-10 pt-0 mt-[-2px] block md:hidden "
        id="about"
        style={{
          cursor: `url(${crsorCustom}), auto`,
        }}
      >
        <div className="flex justify-between items-center flex-col">
          <h1 className="text-white text-3xl font-light text-end pb-5">
            About Us
          </h1>
          <p className="text-gray-200 text-[15px] text-center">
            Kami adalah tim fotografer profesional yang bergerak di bidang foto
            produk, dokumentasi kegiatan, dan berbagai kebutuhan fotografi
            lainnya. Dengan pengalaman dan dedikasi tinggi, kami siap
            menghadirkan hasil terbaik untuk setiap momen Anda.
          </p>
        </div>
      </section>
    </>
  );
}
