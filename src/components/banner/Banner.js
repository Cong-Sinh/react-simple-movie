import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "../../config/Config";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );

  const movie = data?.results || [];
  console.log(movie);
  return (
    <section className="h-[600px] mb-10 overflow-hidden banner page-container">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movie.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full bg-white rounded-lg">
      <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)] "></div>
      <img
        className="object-cover w-full h-full rounded-lg"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
      />
      <div className="absolute w-full bottom-5 left-5">
        <h2 className="mb-5 text-3xl font-bold ">{item.title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="p-2 px-4 border border-white rounded-md">
            adventure
          </span>
          <span className="p-2 px-4 border border-white rounded-md">
            adventure
          </span>
          <span className="p-2 px-4 border border-white rounded-md">
            adventure
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
}

export default Banner;
