"use client";

import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import franco from "../../public/franco.jpg";

const HomePage = () => {
  return (
    <main>
      <section>
        <div className="relative w-80 h-80 mx-auto py-5">
          <Image
            src={franco}
            alt="franco"
            className="rounded-full shadow-black shadow-lg"
          />
        </div>
        <div className="text-center p-10">
          <h1 className="text-4xl font-medium">Franco Huayller</h1>
          <h3 className="text-2xl py-2">Programador web fullstack</h3>
          <p className="text-md py-1 leading-7 text-gray-900">
            Si buscás un profesional versátil y apasionado por el aprendizaje
            continuo, estoy listo para aportar mi experiencia y contribuir al
            éxito de tu proyecto. ¡Hablemos sobre cómo puedo agregar valor a tu
            equipo!
          </p>
        </div>
        <div className="text-5xl flex justify-center">
          <AiFillLinkedin />
        </div>
      </section>
      <section>
        <div>
          <h1 className="font-medium text-4xl px-10 py-5">Sobre mi</h1>
        </div>
        <div className="px-10">
          <p>
            👋¡Hola! soy Franco, y mi propuesta de valor se centra en la
            combinación única de habilidades técnicas y experiencia en el
            desarrollo web.
          </p>
          <p className="py-5">
            💻Mi formación incluye estudios de inglés en el Instituto Lincoln de
            Buenos Aires, donde dediqué 11 años para alcanzar un nivel C2. Esta
            habilidad me permite desenvolverme con facilidad en entornos
            internacionales y colaborar de manera efectiva en equipos diversos.
          </p>
          <p>
            🛠️Como técnico mecánico certificado, poseo una sólida capacidad
            analítica para abordar problemas de manera estratégica y encontrar
            soluciones eficientes.
          </p>
        </div>
      </section>
      <section>
        <div className="px-10">
          <h1 className="text-4xl font-medium py-5">Proyectos</h1>
          <h2 className="font-medium">Woofer</h2>
          <iframe src="https://player.vimeo.com/video/899706008?h=de0596e8ab" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          <p>
            Woofer es más que un simple sitio, es una comunidad dedicada a
            conectar a paseadores de perros (walkers) con dueños de perros
            (owners) que desean brindarles a sus mascotas momentos de felicidad
            y ejercicio. En este innovador servicio, los paseadores de perros
            pueden crear perfiles, permitiéndoles visualizar a los perros
            disponibles para pasear en su área. Por otro lado, los dueños de
            perros pueden confiar en Woofer para encontrar paseadores de
            confianza y apasionados por los amigos peludos. Mientras estos
            cuidan y disfrutan del tiempo con los perros, los propietarios
            pueden tener la tranquilidad de que sus mascotas están en manos
            seguras y amorosas. Woofer no es solo un servicio, es un vínculo
            entre amantes de los perros, facilitando la conexión y la felicidad
            de nuestras queridas mascotas. ¡Un paseo con Woofer es una experiencia compartida llena de alegría y
            cuidado!
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
