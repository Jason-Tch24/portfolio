import React from "react";
import hireMe from "../assets/images/profil2.jpg";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
        <p className="text-gray-400 mt-3 text-lg">Je suis ouvert à l'emploie :)</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Bonjour/Bonsoir <br></br> Je suis actuellement à la recherche d'un job Technicien support informatique. J'ai acquis beaucoup d'experiences dans ce domain au cour de mes formations et de mes stages professionnels.
            <br></br>
            <br></br>
            Hello/Good evening <br></br> I am currently looking for a job as an IT support technician. I have acquired a lot of experience in this area during my training and professional internships.
          </p>
          <a href="#contact"><button className="btn-primary mt-10">Say Hello</button></a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:relative bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
