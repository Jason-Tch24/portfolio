import React from "react";
import aboutImg from "../assets/images/profil.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "09" },
    { text: "Companies Work", count: "04" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                L’informatique est quelque chose qui m'intéresse depuis toujours, en particulier le réseau. J'ai finalement appris énormément le 
                fonctionnement de celui-ci en entreprenant et en complétant des études  approfondies et intensives  en réseau informatique et en 
                sécurité, au cours desquelles j'ai acquis les connaissances nécessaires et j’ai développé  certaines compétences en sécurité pare-
                feu,  VMware, CISCO,  etc.  Grace à  la maitrise  de  l’anglais et du français,  J’ai  de  bonnes capacités analytiques, 
                organisationnelles,  un  bon  sens  de  la  priorisation,  méthodique, habile  manuellement,  dans  l’apprentissage  et  dans  la 
                résolution de problèmes techniques. Je suis polyvalent, j’ai aussi de la facilité à gérer les situations stressantes, et à aisément 
                m’adapter à diverses situations. Un très bon esprit d’équipe, bon communicateur et  patient.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Caleb CV v3-2.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
