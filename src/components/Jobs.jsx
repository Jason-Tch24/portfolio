import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/work-1.png";
import project2 from "../assets/images/work-2.png";
import project3 from "../assets/images/work-3.png";
import project4 from "../assets/images/work-4.jpg";
import project_person from "../assets/images/profil3.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Jobs = () => {
  const projects = [
    {
      img: project1,
      name: "AFL Support (Technicien en Réseau): Installation des fibre optique réseaux résidentie, installation et configuration des modems, routeurs, décodeurs, system téléphoniques, configuration du VPN, de la plateforme plume et SWAT",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://www.aflglobal.com/?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZiubWnP_PGmJ5-UoOURb_5tu9GgImTI_ypmHXPBKcwhuJ2VcejprHhoCMBoQAvD_BwE",
    },
    {
      img: project2,
      name: "Bureau en Gros, Montréal (Technicien informatique): Vente et réparation de matériel  informatique, configuration des peripherique réseaux",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://locations.bureauengros.com/qc/montreal/fournitures-de-bureau-ca-49.html",
    },
    {
      img: project3,
      name: "Staples (IT Tehnician/Sales associate): Installation des systèmes d’exploitation et l’application demandés, configuration des peripheries réseau, vente et reparation de-outil informatique",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://www.staplesadvantage.com/",
    },
    {
      img: project4,
      name: "P&L INC(Enployer polyvalent): ",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://pladminrh.com/",
    },
  ];
  return (
    <section id="jobs" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Job Experience</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Mes experiences professionnelles</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-3 py-1 inline-block"
                    >
                      View
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
