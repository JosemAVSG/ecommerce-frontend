"use client";
import styles from "@/styles/carousel.module.scss";
import { useEffect } from "react";
import CategoriesCard from "./CategoriesCard";
const CarouselProducts = () => {
  // useEffect(() => {
  //   const init = async () => {
  //     const { Carousel, initTWE } = await import("tw-elements");
  //     initTWE({ Carousel });
  //   };
  //   init();
  // }, []);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://nest-demo-latest-plw3.onrender.com/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-cache',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.error('Fetch error:', error);
      
      }
    };

    fetchProducts();

  }, []);

  return (
    <section className="flex mt-52 w-4/5  self-center">
      <div
        className="relative justify-center"
        id="carouselProducts"
        // data-twe-carousel-init=""
        // data-twe-ride="carousel"
      >
        {/*Carousel indicators*/}
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators=""
        >
          <button
            type="button"
            data-twe-target="#carouselProducts"
            data-twe-slide-to={0}
            data-twe-carousel-active=""
            className="mx-[3px] box-content h-[10px] w-[10px]  flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-[50%] bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-twe-target="#carouselProducts"
            data-twe-slide-to={1}
            className="mx-[3px] box-content h-[10px] w-[10px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-[50%] bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-twe-target="#carouselProducts"
            data-twe-slide-to={2}
            className="mx-[3px] box-content h-[10px] w-[10px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent rounded-[50%] bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          />
        </div>
        {/*Carousel items*/}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-2xl h-[450px]">
          <h2 className="text-xl font-semibold text-gray-800 p-4 bg-white" >Ultimos Articulos </h2>
          {/*First item*/}
          <div
            className="relative float-left bg-white -mr-[100%] h-auto w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active=""
            data-twe-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <section className="grid p-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-rows-[minmax(380px,auto)] gap-4  bg-white">
              
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-full  object-cover"
                  src="https://tecdn.b-cdn.net/img/new/slides/146.jpg"
                  alt="..."
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    First slide label
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-full  object-cover"
                  src="https://tecdn.b-cdn.net/img/new/slides/146.jpg"
                  alt="..."
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    First slide label
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-full  object-cover"
                  src="https://tecdn.b-cdn.net/img/new/slides/146.jpg"
                  alt="..."
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    First slide label
                  </h2>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-full  object-cover"
                  src="https://tecdn.b-cdn.net/img/new/slides/146.jpg"
                  alt="..."
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    First slide label
                  </h2>
                </div>
              </div>

            </section>

              
          
          </div>
          {/*Second item*/}
          <div
            className="relative float-left bg-white -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
          </div>
          {/*Third item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item=""
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full "
              alt="..."
            />
          </div>
        </div>
        {/*Carousel controls - prev item*/}
        <button
          className="absolute bg-white w-[8%] h-[18%]  bottom-0 -left-8 rounded-[100%] top-52 z-[1] flex items-center justify-center p-0 text-center  text-black hover:shadow-4xl hover:border-2 hover:border-blue-900"
          type="button"
          data-twe-target="#carouselProducts"
          data-twe-slide="prev"
        >
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/*Carousel controls - next item*/}
        <button
          className="absolute bg-white w-[8%] h-[18%]  bottom-0 -right-10 rounded-[100%] top-52  flex items-center justify-center p-0 text-center  text-black hover:border-2 hover:border-blue-900 "
          type="button"
          data-twe-target="#carouselProducts"
          data-twe-slide="next"
        >
          <span className="inline-block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </section>
  );
};

export default CarouselProducts;
