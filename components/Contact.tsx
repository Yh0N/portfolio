'use client';

import emailjs from 'emailjs-com';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaPhoneAlt, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
    const emailData = { name, email, subject, message };

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

  useEffect(() => {
    // Parallax mouse movement for the floating icons
    const handleMouseMove = (e: MouseEvent) => {
      const icons = document.querySelectorAll('.animate-float');
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.5;
        (icon as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="contact" className="w-full min-h-screen pt-20 pb-20 bg-[#323C48] text-gray-200 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#39CEAF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full bg-[#39CEAF]/5 blur-[120px] pointer-events-none" />

      <style>{`
        @keyframes float-anim {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }
        .float-keyframe {
            animation: float-anim 6s ease-in-out infinite;
        }
        .glass-card-contact {
            background: rgba(34, 40, 49, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card-contact:hover {
            border-color: #39CEAF;
            box-shadow: 0 0 20px rgba(57, 206, 175, 0.2);
            transform: translateY(-4px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-center">
        <header className="mb-12 text-center md:text-left relative">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#39CEAF] tracking-tighter mb-4 uppercase">
            Contáctame
          </h2>
          <div className="h-1 w-24 bg-[#39CEAF] rounded-full shadow-[0_0_10px_#39CEAF] mb-6 md:mx-0 mx-auto"></div>
          <p className="text-lg text-gray-300 max-w-2xl">
            Envíame un mensaje y construyamos el futuro juntos. Ya sea para un proyecto nuevo, una consulta o simplemente para saludar.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Contact Form Section */}
          <section className="lg:col-span-5 order-2 lg:order-1 flex">
            <div className="w-full bg-[#222831]/90 p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-700/50 flex flex-col justify-center backdrop-blur-sm relative overflow-hidden">
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39CEAF]/50 to-transparent"></div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-2 group relative">
                  <label className="text-sm font-semibold text-gray-400 px-1 transition-colors group-focus-within:text-[#39CEAF]">Nombre</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="¿Cómo te llamas?" 
                    className="w-full bg-[#181d24] border border-gray-700/50 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39CEAF]/30 focus:border-[#39CEAF] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-gray-500/50" 
                  />
                </div>
                <div className="flex flex-col gap-2 group relative">
                  <label className="text-sm font-semibold text-gray-400 px-1 transition-colors group-focus-within:text-[#39CEAF]">Email</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com" 
                    className="w-full bg-[#181d24] border border-gray-700/50 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39CEAF]/30 focus:border-[#39CEAF] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-gray-500/50" 
                  />
                </div>
                <div className="flex flex-col gap-2 group relative">
                  <label className="text-sm font-semibold text-gray-400 px-1 transition-colors group-focus-within:text-[#39CEAF]">Asunto</label>
                  <input 
                    type="text" 
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="¿De qué trata tu mensaje?" 
                    className="w-full bg-[#181d24] border border-gray-700/50 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39CEAF]/30 focus:border-[#39CEAF] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-gray-500/50" 
                  />
                </div>
                <div className="flex flex-col gap-2 group relative">
                  <label className="text-sm font-semibold text-gray-400 px-1 transition-colors group-focus-within:text-[#39CEAF]">Mensaje</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu idea aquí... ¡Hablemos!" 
                    rows={4} 
                    className="w-full bg-[#181d24] border border-gray-700/50 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39CEAF]/30 focus:border-[#39CEAF] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] hover:border-gray-500/50 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#39CEAF] to-[#2BA88D] text-[#002113] font-bold text-lg py-3 mt-2 rounded-xl shadow-[0_4px_15px_rgba(57,206,175,0.3)] hover:shadow-[0_8px_30px_rgba(57,206,175,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                </button>
                {isSent && <p className="text-[#39CEAF] text-center text-sm font-medium bg-[#39CEAF]/10 py-2 rounded-md">¡Mensaje enviado con éxito!</p>}
                {error && <p className="text-red-400 text-center text-sm font-medium bg-red-400/10 py-2 rounded-md">{error}</p>}
              </form>
            </div>
          </section>

          {/* Organic Social Layout Section */}
          <section className="lg:col-span-7 h-[500px] md:h-[auto] relative order-1 lg:order-2 flex">
            <div className="w-full h-full bg-[#0d131f] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-gray-700/50 relative overflow-hidden min-h-[500px] backdrop-blur-sm">
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39CEAF]/30 to-transparent"></div>
              
              {/* Decorative Grid Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #39CEAF 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Central Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#39CEAF]/5 blur-[80px] pointer-events-none"></div>

              {/* Floating Icons — all larger and properly spaced */}

              {/* Github — top left */}
              <a href="https://github.com/Yh0N" target="_blank" rel="noopener noreferrer" className="absolute top-[8%] left-[12%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '0s' }}>
                <div className="glass-card-contact w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center -rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <FaGithub className="text-[#39CEAF] text-5xl md:text-6xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">GITHUB</span>
              </a>

              {/* Gmail — top right, big focal icon */}
              <a href="mailto:jhon123moran21@gmail.com?subject=Hola%20Jhon%2C%20me%20interesa%20contactarte&body=Hola%20Jhon%2C%20te%20escribo%20porque..." className="absolute top-[6%] right-[10%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '0.8s' }}>
                <div className="glass-card-contact w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <SiGmail className="text-[#39CEAF] text-5xl md:text-6xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">GMAIL</span>
              </a>

              {/* WhatsApp — left center */}
              <a href="https://wa.link/p56tuv" target="_blank" rel="noopener noreferrer" className="absolute top-[42%] left-[5%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '0.5s' }}>
                <div className="glass-card-contact w-20 h-20 md:w-28 md:h-28 rounded-[22px] flex items-center justify-center rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <FaWhatsapp className="text-[#39CEAF] text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">WHATSAPP</span>
              </a>

              {/* Instagram — center */}
              <a href="https://www.instagram.com/jhoxn_mx/" target="_blank" rel="noopener noreferrer" className="absolute top-[38%] left-[38%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '1.5s' }}>
                <div className="glass-card-contact w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center rotate-6 group-hover:scale-110 transition-transform shadow-xl">
                  <FiInstagram className="text-[#39CEAF] text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">INSTAGRAM</span>
              </a>

              {/* X (Twitter) — right center */}
              <a href="https://x.com/Jhon09878611" target="_blank" rel="noopener noreferrer" className="absolute top-[40%] right-[8%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '1.2s' }}>
                <div className="glass-card-contact w-18 h-18 md:w-24 md:h-24 p-5 rounded-2xl flex items-center justify-center -rotate-6 group-hover:scale-110 transition-transform shadow-xl">
                  <FaXTwitter className="text-[#39CEAF] text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">X</span>
              </a>

              {/* Facebook — bottom center */}
              <a href="https://www.facebook.com/jhon.moran.7169709/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="absolute bottom-[8%] left-[40%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '2.7s' }}>
                <div className="glass-card-contact w-20 h-20 md:w-26 md:h-26 p-5 rounded-full flex items-center justify-center -rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <FaFacebookF className="text-[#39CEAF] text-4xl md:text-5xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">FACEBOOK</span>
              </a>

              {/* Location — bottom left */}
              <div className="absolute bottom-[12%] left-[8%] float-keyframe animate-float group" style={{ animationDelay: '3s' }}>
                <div className="glass-card-contact w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center rotate-6 group-hover:scale-110 transition-transform shadow-xl">
                  <IoLocationSharp className="text-[#39CEAF] text-3xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">COLOMBIA</span>
              </div>

              {/* Phone — bottom right */}
              <a href="tel:+573059836050" className="absolute bottom-[15%] right-[10%] float-keyframe animate-float group cursor-pointer" style={{ animationDelay: '2.2s' }}>
                <div className="glass-card-contact w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center -rotate-6 group-hover:scale-110 transition-transform shadow-xl">
                  <FaPhoneAlt className="text-[#39CEAF] text-3xl md:text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono text-[#39CEAF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-[#222831] px-3 py-1 rounded-full border border-[#39CEAF]/30 whitespace-nowrap">+57 305 9836050</span>
              </a>
            </div>
          </section>
        </div>

        {/* Secondary Information / Meta */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#222831] border border-gray-700/50 p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#39CEAF] hover:shadow-[0_10px_30px_rgba(57,206,175,0.15)] group">
            <IoLocationSharp className="text-[#39CEAF] text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">Ubicación</h3>
            <p className="text-gray-400">Pasto - Colombia</p>
          </div>
          <div className="bg-[#222831] border border-gray-700/50 p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#39CEAF] hover:shadow-[0_10px_30px_rgba(57,206,175,0.15)] group">
            <FiInstagram className="text-[#39CEAF] text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">Disponibilidad</h3>
            <p className="text-gray-400">Actualmente aceptando nuevos proyectos y colaboraciones.</p>
          </div>
          <div className="bg-[#222831] border border-gray-700/50 p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#39CEAF] hover:shadow-[0_10px_30px_rgba(57,206,175,0.15)] group">
            <FaGithub className="text-[#39CEAF] text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">Garantía</h3>
            <p className="text-gray-400">Código limpio, escalable y con una arquitectura de primer nivel.</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
