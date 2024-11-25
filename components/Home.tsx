"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const Home = () => {

const [iconColorInstagram, setIconColorInstagram] = useState("#39CEAF");
const [borderColorInstagram, setBorderColorInstagram] = useState("#39CEAF");

const [iconColorGithub, setIconColorGithub] = useState("#39CEAF");
const [borderColorGithub, setBorderColorGithub] = useState("#39CEAF");

const [iconColorWhatsapp, setIconColorWhatsapp] = useState("#39CEAF");
const [borderColorWhatsapp, setBorderColorWhatsapp] = useState("#39CEAF");

const [iconColorFacebook, setIconColorFacebook] = useState("#39CEAF");
const [borderColorFacebook, setBorderColorFacebook] = useState("#39CEAF");

return (
    <section
    id="home"
    className="py-20 bg-cover bg-center relative"
    style={{ backgroundImage: "url('/fondo.png')" }}
    >
    <div className="absolute top-0 left-0 w-full h-full bg-[#323c48] opacity-75 z-0"></div>
    <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="bg-[#222831] p-8 rounded-[70px] shadow-xl max-w-sm w-full text-center relative">
        <div
            className="w-72 h-72 flex justify-center items-center mx-auto"
            style={{
            borderRadius: '50%',
            border: '8px solid transparent',
            backgroundImage: 'linear-gradient(to right, #39CEAF, #00B5E2)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box',
            }}
        >
            <img
            src="/fondo.png"
            alt="Avatar"
            className="w-64 h-64 rounded-full object-cover"
            />
        </div>
        <h1 className="text-5xl font-bold text-white mt-8">Jhon Fredy Moran</h1>
        <p className="mt-4 text-gray-300">Estudiante de Ing Software</p>

        <div className="flex justify-center gap-4 mt-8">

            <a
            href="https://www.instagram.com/jhoxn_mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#323c48] border-4 border-[#39CEAF] w-16 h-16 p-2 rounded-[20px] shadow-lg flex justify-center items-center"
            onMouseEnter={() => {
                setIconColorInstagram("#137262");
                setBorderColorInstagram("#137262");
            }}
            onMouseLeave={() => {
                setIconColorInstagram("#39CEAF");
                setBorderColorInstagram("#39CEAF");
            }}
            style={{ borderColor: borderColorInstagram }}
            >
            <FaInstagram className="text-5xl" style={{ color: iconColorInstagram }} />
            </a>
            
            <a
            href="https://github.com/Yh0N"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#323c48] border-4 border-[#39CEAF] w-16 h-16 p-2 rounded-[20px] shadow-lg flex justify-center items-center"
            onMouseEnter={() => {
                setIconColorGithub("#137262");
                setBorderColorGithub("#137262");
            }}
            onMouseLeave={() => {
                setIconColorGithub("#39CEAF");
                setBorderColorGithub("#39CEAF");
            }}
            style={{ borderColor: borderColorGithub }}
            >
            <FaGithub className="text-5xl" style={{ color: iconColorGithub }} />
            </a>
            
            <a
            href="https://wa.link/p56tuv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#323c48] border-4 border-[#39CEAF] w-16 h-16 p-2 rounded-[20px] shadow-lg flex justify-center items-center"
            onMouseEnter={() => {
                setIconColorWhatsapp("#137262");
                setBorderColorWhatsapp("#137262");
            }}
            onMouseLeave={() => {
                setIconColorWhatsapp("#39CEAF");
                setBorderColorWhatsapp("#39CEAF");
            }}
            style={{ borderColor: borderColorWhatsapp }}
            >
            <FaWhatsapp className="text-5xl" style={{ color: iconColorWhatsapp }} />
            </a>
            
            <a
            href="https://www.facebook.com/jhon.moran.7169709/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#323c48] border-4 border-[#39CEAF] w-16 h-16 p-2 rounded-[20px] shadow-lg flex justify-center items-center"
            onMouseEnter={() => {
                setIconColorFacebook("#137262");
                setBorderColorFacebook("#137262");
            }}
            onMouseLeave={() => {
                setIconColorFacebook("#39CEAF");
                setBorderColorFacebook("#39CEAF");
            }}
            style={{ borderColor: borderColorFacebook }}
            >
            <GrFacebookOption className="text-5xl" style={{ color: iconColorFacebook }} />
            </a>
        </div>
        </div>
    </div>
    </section>
);
};

export default Home;
