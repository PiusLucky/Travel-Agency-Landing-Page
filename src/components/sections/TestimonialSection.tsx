import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const reviews = [
    {
      id: 0,
      imageUrl: "/images/mike.png",
      reviewerName: "Mike taylor",
      position: "Lahore, Pakistan",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      id: 2,
      imageUrl: "/images/mike.png",
      reviewerName: "Chris Thomas",
      position: "CEO of Red Button",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
  ];
  return (
    <section className="flex justify-between flex-col xl:flex-row items-center lg:-mt-[5rem] gap-16">
      <div>
        <p className="text-lightGray text-[1.125rem] font-[600] text-left uppercase">
          Testimonials
        </p>
        <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
          What People Say About Us.
        </p>

        <div className="mt-[5.12rem] ">
          <img
            src="/images/slide-indicator.png"
            alt="slide indicator"
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-[4.12rem]">
        <div className="relative">
          <TestimonialCard
            key={reviews[0].id}
            position={reviews[0].position}
            review={reviews[0].review}
            reviewerName={reviews[0].reviewerName}
            imageUrl={reviews[0].imageUrl}
          />
          <div className="absolute -bottom-[6rem] left-32 -z-10">
            <TestimonialCard
              key={reviews[1].id}
              position={reviews[1].position}
              review={reviews[1].review}
              reviewerName={reviews[1].reviewerName}
              imageUrl={reviews[1].imageUrl}
              isBackdrop
            />
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="hover:cursor-pointer">
            <img src="/images/chevron-up.png" alt="chevron up" />
          </div>
          <div className="hover:cursor-pointer">
            <img src="/images/chevron-down.png" alt="chevron up" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
