import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_xrytexu";
    const templateId = "template_tikvosc";
    const userId = "t73X2shJ4K4Hk22VA";

    emailjs.send(serviceId, templateId, { name, email, message }, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="w-[90%] flex flex-col items-center mx-auto pb-6">
        <div className=" flex flex-col items-center py-8">
          <h1 className="text-4xl py-6 lg:text-5xl">Contact Me</h1>
          <h2 className="text-2xl text-center lg:text-3xl">
            Have a project, idea or just want to ask a question?
          </h2>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="md:flex md: justify-between">
            <div className="flex flex-col flex-1 md:mr-4">
              <label className="my-3 text-gray-500 text-lg" htmlFor="name">
                Name
              </label>
              <input
                className="border-gray-200 border-2 rounded p-2 md:text-lg"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col flex-1 md:ml-4">
              <label className="my-3 text-gray-500 text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="border-gray-200 border-2 rounded p-2 md:text-lg"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="my-3 text-gray-500 text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="border-gray-200 border-2 rounded resize-none p-2 md:text-lg"
              id="message"
              name="message"
              value={message}
              rows={8}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="bg-black text-white py-2 px-6 mt-6" type="submit">
            Send
          </button>
        </form>
      </div>
      <img className="w-full" src="/images/hiking.jpeg" alt="hiking" />
    </div>
  );
}

export default ContactMe;
