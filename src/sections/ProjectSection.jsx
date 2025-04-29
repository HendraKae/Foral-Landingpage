import projectSatu from "../assets/images/projectSatu.png";
import projectSatuMobile from "../assets/images/projectSatuMobile.png";
import projectDua from "../assets/images/projectDua.png";
import projectDuaMobile from "../assets/images/projectDuaMobile.png";

export default function Project() {
  return (
    <section id="project" className="bg-[#556b2f] mt-[-10px] relative z-2">
      <div className="bg-[#F6FFE6] md:rounded-t-[140px] rounded-t-[50px] mt-[-10px] py-15 md:py-30 px-10 md:px-45">
        <h1 className="text-4xl md:text-8xl font-light text-[#556b2f]">
          Projek
        </h1>
        <div className="pt-10 md:pt-20 flex flex-col gap-6 md:gap-15">
          <div className="w-full relative">
            <img
              src={projectSatu}
              alt="project satu"
              className="w-full hidden md:block blur-[1px] md:blur-[3px] brightness-75 hover:blur-[0px] hover:brightness-[100%] transition-all duration-500 ease-in-out"
            />
            <img
              src={projectSatuMobile}
              alt="project satu"
              className="w-full md:hidden block blur-[1px] md:blur-[3px] brightness-75 hover:blur-[0px] hover:brightness-[100%] transition-all duration-500 ease-in-out"
            />
            <p className="absolute bottom-4 md:bottom-13 left-5 md:left-15 text-white text-[15px] md:text-3xl">
              Product <br />
              Photography
            </p>
          </div>
          <div className="w-full relative">
            <img
              src={projectDua}
              alt="project satu"
              className="w-full hidden md:block blur-[1px] md:blur-[3px] brightness-75 hover:blur-[0px] hover:brightness-[100%] transition-all duration-500 ease-in-out"
            />
            <img
              src={projectDuaMobile}
              alt="project satu"
              className="w-full md:hidden block blur-[1px] md:blur-[3px] brightness-75 hover:blur-[0px] hover:brightness-[100%] transition-all duration-500 ease-in-out"
            />
            <p className="absolute bottom-4 md:bottom-13 left-5 md:left-15 text-white text-[15px] md:text-3xl">
              Event <br />
              Photography
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
