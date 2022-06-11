import React from "react";
import "./Teams.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import jaybee from "../../img/jaybee.jpg";
import alby from "../../img/alby.jpg";
import kurt from "../../img/kurt.jpg";
import brix from "../../img/brix.jpg";
import martys from "../../img/martys.jpg";
import isip from "../../img/isip.jpg";

const Teams = () => {
  const clients = [
    {
      img: jaybee,
      desc: 
      "Project Manager - John Benedict Geli",
      review: 
        "Provides focus for the team on their various projects, and help to keep it moving along on schedule. Take care of planning and ensure the team is staffed with the best talent.",
    },
    {
      img: alby,
      desc: 
      "Mobile App Developer - Mark Steven Alba",
      review: 
        "Primary duty is to create, maintain, and implement the source code to develop mobile apps and mobile platform programs that meet the needs and requirements of the clients with a strong skill on analytical and problem-solving capabilities.",
    },
    {
      img: kurt,
      desc: 
      "Backend Developer - Kurt Clide Esperas",
      review: 
        "Responsible for creating and maintaining technology at the back end of a website (the server, database and application). The attractive visuals created by designers, UX professionals and front end developers couldn’t exist without the technology provided by a back end developer.",
    },
    {
      img: martys,
      desc: 
      "Frontend Developer - Marty Pabello",
      review: 
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
    },
    {
      img: brix,
      desc: 
      "DevOps - Brix Delute",
      review: 
      "DevOps is a methodology that has evolved from the experience and best practices of managing the development, testing, and support processes in a software development project life cycle",
    },
    {
      img: isip,
      desc: 
      "The (quality) tester - Jezekiel Isip",
      review: 
        "This person tests every functionality that the team has made in every possible condition before the website becomes available to regular users. When something is not in order, he reports a Bug to the developers.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Making Difference both in the Company and the Global Community</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.desc}</span>
                <br />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Teams;
