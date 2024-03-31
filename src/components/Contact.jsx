import {useRef} from "react";
const email = document.getElementById('email')
const massege = document.getElementById('message')


const Contact = () => {
  const form = useRef()

  const sendEmail = () => {
    const email = getElementById
    const message = getElementById
    Email.send({
      SecureToken : "4eba4c44-fb73-4c2a-9718-01a0fcff690b",
      To : 'jasonetude@gmail.com',
      From : email,
      Subject : "Contacte for a job",
      Body : message
  }).then(
    message => alert(message)
  );
  };
  const contact_info = [
    { logo: "mail", text: "tchagacaleb@gmail.com" },
    { logo: "logo-whatsapp", text: "+1 438.530.6739" },
    {
      logo: "logo-linkedin",
      text: "http://www.linkedin.com/in/caleb-tchaga",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Envoyer moi un message</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" id="email"/>
            <textarea placeholder="Your Message" rows={10} id="message"></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
