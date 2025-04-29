import logo from "../assets/images/svg/logo.svg";

export default function Footer() {
  return (
    <footer className="p-10 bg-[#556b2f] flex justify-between items-center flex-col">
      <img
        src={logo}
        alt="logo"
        className="filter invert brightness-[0%] w-[50%] md:w-[inherit]"
      />
      <p className="text-[13px] md:text-[19px] text-white text-center">
        Mengabadikan setiap momen dengan penuh arti.
      </p>
    </footer>
  );
}
