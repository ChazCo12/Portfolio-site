import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#D3D3D3] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/56a5b1f3-a7a6-421a-a3fc-ce62d03eb18a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h2 className="inline text-4xl font-bold text-[#8892b0] border-b-4 border-[#4361ee]">
            Contact
          </h2>
          <p className="py-3 text-[#494F55]">
            Submit the form below or shoot me an email
          </p>
        </div>
        <input
          className="bg-[#494F55] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#494F55]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#494F55] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="flex items-center px-4 py-3 mx-auto my-8 text-[#494f55] border-[#494f55] border-2   hover:bg-[#4361ee] hover:border-[#4361ee]">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
