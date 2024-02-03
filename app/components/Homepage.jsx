"use client";

import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'

const HomePage = () => {
  return (
    <main className="px-10">
        <div className="text-center p-10">
            <h1 className="text-4xl text-teal-600 font-medium">Franco Huayller</h1>
            <h3 className="text-2xl py-2">Programador web fullstack</h3>
            <p className="text-md py-1 leading-7 text-gray-900">
                Si buscás un profesional versátil y apasionado por el aprendizaje
                continuo, estoy listo para aportar mi experiencia y contribuir al éxito
                de tu proyecto. ¡Hablemos sobre cómo puedo agregar valor a tu equipo!
            </p>
        </div>
        <div className="text-5xl flex justify-center">
            <AiFillLinkedin/>
        </div>
    </main>
  );
};

export default HomePage;
