import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"


import { Row } from "react-bootstrap";

// import required modules
import { Pagination, Navigation } from "swiper";

import logoCmp from "../../assets/png/clientes/logos/Logo-CMP_WEB.jpeg";
import logoMc from "../../assets/png/clientes/logos/Logo_mc.jpg";
import TPC from "../../assets/png/clientes/logos/TPC.png";
import MTA from "../../assets/png/clientes/logos/MTA.png";
import Ulog from "../../assets/png/clientes/logos/Ulog.jpeg";
import Famesa from "../../assets/png/clientes/logos/Famesa.png";

export default function ReviewClientes() {
  const navigationPrevRef = React.useRef<HTMLInputElement>(null)
  const navigationNextRef = React.useRef<HTMLInputElement>(null)
  const clientes = [logoCmp, TPC, logoMc, MTA, Ulog, Famesa]
  return (

    <React.Fragment>
      <h4 className="text-uppercase text-center mt-5 fs-2 fw-bold"
        style={{ letterSpacing: "3px", color: "#444" }}>nuestros clientes</h4>
      <h5 className="text-center text-uppercase fs-5 mb-5"
        style={{ color: "#444" }}>quienes confían en nosotros</h5>
      <Row style={{
        padding: '100px 0',
        background: '#282D47'
      }}>

        <Swiper
          style={{
            width: "95%"
          }}
          spaceBetween={10}
          breakpoints={{
            // when window width is >= 640 px
            365: {
              slidesPerView: 1,
            },
            // when window width is >= 728px
            720: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window with is >= 1200px
            1200: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{ delay: 2000 }}
        >
          {
            clientes.map((cliente, index) => (
              <SwiperSlide key={index} className="pb-4" style={{
                height: "180px"
              }}>
                <img src={cliente} alt="" className="d-block img-fluid h-100 p-3 shadow"
                  style={{ width: "100%" }} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Row>
    </React.Fragment>
  );
}
