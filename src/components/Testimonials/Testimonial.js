import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      desc: 
      "Project Manager - John Benedict Geli",
      review: 
        "Provides focus for the team on their various projects, and help to keep it moving along on schedule. Take care of planning and ensure the team is staffed with the best talent.",
    },
    {
      img: profilePic3,
      desc: 
      "Mobile App Developer - Mark Steven Alba",
      review: 
        "Building mobile applications has a strong skill on analytical and problem-solving capabilities.",
    },
    {
      img: profilePic2,
      desc: 
      "Backend Developer - Kurt Clide Esperas",
      review: 
        "Responsible for creating and maintaining technology at the back end of a website (the server, database and application). The attractive visuals created by designers, UX professionals and front end developers couldn’t exist without the technology provided by a back end developer.",
    },
    {
      img: profilePic1,
      desc: 
      "Frontend Developer - Marty Pabello",
      review: 
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
    },
    {
      img: profilePic4,
      desc: 
      "Frontend Developer - Brix Delute",
      review: 
      "With collaboration to backend on what to be displayed visually through fast and scalable design with exceptional user experience. ",
    },
    {
      img: profilePic4,
      desc: 
      "The (quality) tester - Jezekiel Isip",
      review: 
        "This person tests every functionality that the team has made in every possible condition before the website becomes available to regular users. When something is not in order, he reports a Bug to the developers.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Making difference both in the company and the global community</span>
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

export default Testimonial;
