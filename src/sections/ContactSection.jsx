export default function Contact() {
  return (
    <section className="p-0 md:p-10" id="contact">
      <div className="flex flex-col gap-4 md:gap-10 pb-15 md:pb-30 px-8">
        <h1 className="text-center text-4xl md:text-8xl pt-14 md:pt-30">
          Contact Us !
        </h1>
        <p className="text-center text-[13px] md:text-2xl text-gray-600">
          Mengabadikan momen berharga Anda dengan{" "}
          <br className="hidden md:block" /> sentuhan profesional dan penuh
          makna.
          <br className="hidden md:block" /> Hubungi saya sekarang!
        </p>
        <a
          className="text-center text-[15px] md:text-2xl px-1 py-3 md:px-3 md:py-5 bg-[#556b2f] rounded-full hover:bg-[#455a1f] duration-300 ease-in-out text-white"
          href="mailto:brodyhitgap@gmail.com"
        >
          Kirim Pesan
        </a>
      </div>
    </section>
  );
}
