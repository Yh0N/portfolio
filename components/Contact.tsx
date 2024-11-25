'use client';

import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await emailjs.send(
        'service_qddqsx5',
        'template_6xjhq9g',
        emailData,
        'dhe_zqToo0R3Tas0a'
      );

      console.log('Correo enviado:', response.status, response.text);
      setIsSent(true);
      setError('');

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('Error al enviar el correo:', err);
      setError('Hubo un error al enviar el mensaje. Intenta nuevamente.');
    }
  };

  return (
    <section id="contact" className="bg-[#323C48] py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Formulario */}
        <article className="bg-[#222831] p-6 lg:p-8 rounded-lg shadow-lg w-full lg:w-1/2 lg:mr-8">
          <header>
            <h2 className="text-2xl lg:text-3xl text-center font-bold text-[#39CEAF] mb-6">
              Envíame un mensaje
            </h2>
          </header>
          <form onSubmit={handleSubmit} className="space-y-4">
            <section>
              <label htmlFor="name" className="block text-sm lg:text-lg font-medium text-gray-300">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 lg:p-3 border-2 rounded-md text-[#39CEAF] bg-[#323C48] placeholder-[#39CEAF] placeholder-opacity-60"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="email" className="block text-sm lg:text-lg font-medium text-gray-300">
                Correo:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 lg:p-3 border-2 rounded-md text-[#39CEAF] bg-[#323C48] placeholder-[#39CEAF] placeholder-opacity-60"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="subject" className="block text-sm lg:text-lg font-medium text-gray-300">
                Asunto:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-2 lg:p-3 border-2 rounded-md text-[#39CEAF] bg-[#323C48] placeholder-[#39CEAF] placeholder-opacity-60"
                placeholder="El asunto de tu mensaje"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </section>
            <section>
              <label htmlFor="message" className="block text-sm lg:text-lg font-medium text-gray-300">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-2 lg:p-3 border-2 rounded-md text-[#39CEAF] bg-[#323C48] placeholder-[#39CEAF] placeholder-opacity-60"
                placeholder="Escribe tu mensaje aquí"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </section>
            <section className="text-center">
              <button
                type="submit"
                className="bg-[#39CEAF] text-white py-2 px-4 lg:py-3 lg:px-6 rounded-md hover:bg-[#32b19a] transition duration-300"
              >
                Enviar
              </button>
            </section>
          </form>

          {isSent && <p className="text-[#39CEAF] mt-4">¡Mensaje enviado con éxito!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </article>

        <section className="relative w-full h-96 bg-[#13161a] rounded-lg overflow-hidden mt-8 lg:mt-0">
          <article className="w-20 h-20 bg-[#222831] rounded-full absolute top-10 left-10 flex justify-center items-center shadow-lg">
            <FiInstagram className="text-[#39CEAF] text-3xl" />
            <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center" />
            <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center" />
          </article>
          <p className="text-white text-lg absolute top-12 left-28 sm:left-32 md:left-40">Instagram</p>

          <article className="w-20 h-20 bg-[#222831] rounded-full absolute top-40 left-20 sm:left-40 md:left-60 flex justify-center items-center shadow-lg">
            <FaGithub className="text-[#39CEAF] text-3xl" />
            <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center" />
            <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center" />
          </article>
          <p className="text-white text-lg absolute top-60 left-24 sm:left-44 md:left-64">GitHub</p>

          <article className="w-20 h-20 bg-[#222831] rounded-full absolute bottom-20 left-5 sm:left-10 md:left-20 flex justify-center items-center shadow-lg">
            <IoLocationSharp className="text-[#39CEAF] text-3xl" />
            <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center" />
            <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center" />
          </article>
          <p className="text-white text-lg absolute bottom-16 left-5 sm:left-12 md:left-24">Pasto-Colombia</p>

          <article className="w-20 h-20 bg-[#222831] rounded-full absolute top-5 right-20 sm:right-40 md:right-60 flex justify-center items-center shadow-lg">
            <SiGmail className="text-[#39CEAF] text-3xl" />
            <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center" />
            <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center" />
          </article>
          <p className="text-white text-lg absolute top-28 right-24 sm:right-44 md:right-64">Gmail</p>

          <article className="w-20 h-20 bg-[#222831] rounded-full absolute bottom-40 right-20 sm:right-40 md:right-40 flex justify-center items-center shadow-lg">
            <FaPhoneAlt className="text-[#39CEAF] text-3xl" />
            <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center" />
            <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center" />
          </article>
          <p className="text-white text-lg absolute bottom-40 right-5 sm:right-10 md:right-20">+573059836050</p>
        </section>
      </div>
    </section>
  );
};

export default Contact;
