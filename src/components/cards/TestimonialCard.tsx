import React from "react";

interface IProps {
  imageUrl: string;
  review: string;
  reviewerName: string;
  position: string;
  isBackdrop?: boolean;
}

function TestimonialCard({
  imageUrl,
  review,
  reviewerName,
  position,
  isBackdrop,
}: IProps) {
  return (
    <div
      className={`p-8 rounded-slight  bg-white max-w-[31.5rem] ${
        isBackdrop
          ? "shadow-none border-[2px] border-[#F7F7F7]"
          : "shadow-lg mr-8"
      }`}
    >
      <div className="relative">
        <p className="text-lightGray font-[700] text-[1rem] leading-8">
          &apos;&apos; {review} &apos;&apos;
        </p>
        <p className="text-[1.125rem] text-lightGray font-[600] mt-[2.12rem]">
          {reviewerName}
        </p>
        <p className="text-lightGray font-[500] text-[0.875rem]">{position}</p>
        <div className="absolute top-[-4rem] md:left-[-4rem]">
          {!isBackdrop && (
            <img
              src={imageUrl}
              alt="reviewer photo"
              className="w-[4.25rem] h-[4.25rem] rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
