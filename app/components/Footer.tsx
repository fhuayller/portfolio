import React from "react";
import Button from "./Button";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/index";

const Footer = () => {
  return (
    <footer className="w-full" id="contact">
      <div
        className="w-full min-h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url("/footer-grid.svg")' }}
      >
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            ¿Empezamos a trabajar <span className="text-purple">juntos?</span>
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Ponte en contacto conmigo y hablemos sobre como puedo sumar a tu
            equipo
          </p>
          <a href="mailto:fhuayller@gmail.com">
            <Button
              title="Adelante"
              icon={<FaLocationArrow />}
              position="rigth"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm pb-2 md:font-normal font-light">
            Hecho con Next Js
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
              >
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={profile.img}
                    alt={profile.img}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
