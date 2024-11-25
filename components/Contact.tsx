// components/Contact.tsx

'use client';

import emailjs from 'emailjs-com';
import React, { useState } from 'react';

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
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Formulario */}
        <div className="bg-[#222831] p-6 lg:p-8 rounded-lg shadow-lg w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl text-center font-bold text-[#39CEAF] mb-6">
            Envíame un mensaje
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#39CEAF] text-white py-2 px-4 lg:py-3 lg:px-6 rounded-md hover:bg-[#32b19a] transition duration-300"
              >
                Enviar
              </button>
            </div>
          </form>

          {isSent && <p className="text-[#39CEAF] mt-4">¡Mensaje enviado con éxito!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>


  {/* Caja contenedora */}
  <div className="relative w-full h-96 bg-[#13161a] rounded-lg overflow-hidden">
    {/* Burbuja 1 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute top-10 left-10 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">1</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">1.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">1.2</span>
      </div>
    </div>

    {/* Burbuja 2 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute top-40 left-20 sm:left-40 md:left-60 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">2</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">2.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">2.2</span>
      </div>
    </div>

    {/* Burbuja 3 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute bottom-20 left-5 sm:left-10 md:left-20 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">3</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">3.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">3.2</span>
      </div>
    </div>

    {/* Burbuja 4 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute top-5 right-20 sm:right-40 md:right-60 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">4</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">4.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">4.2</span>
      </div>
    </div>

    {/* Burbuja 5 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute bottom-40 right-20 sm:right-40 md:right-40 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">5</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">5.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">5.2</span>
      </div>
    </div>

    {/* Burbuja 6 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute bottom-60 left-20 sm:left-40 md:left-40 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">6</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">6.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">6.2</span>
      </div>
    </div>

    {/* Burbuja 7 */}
    <div className="w-16 h-16 bg-[#222831] rounded-full absolute bottom-5 right-10 sm:right-20 md:right-40 flex justify-center items-center shadow-lg">
      <span className="text-white text-lg font-bold">7</span>
      <div className="w-6 h-6 bg-[#222831] rounded-full absolute -top-4 -left-4 shadow-md flex justify-center items-center">
        <span className="text-white text-sm">7.1</span>
      </div>
      <div className="w-4 h-4 bg-[#222831] rounded-full absolute -bottom-4 -right-4 shadow-md flex justify-center items-center">
        <span className="text-white text-xs">7.2</span>
      </div>
    </div>
  </div>




      </div>
    </section>
  );
};

export default Contact;
