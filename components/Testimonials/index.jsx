import React from "react";
import { testimonials } from "../../utils/constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
   return (
      <div className="px-20 my-10">
         <h1 className="text-lg text-primary">What our users have been saying</h1>
         <h1 className="text-3xl mt-5">Testimonials</h1>
         <div className="my-13 flex flex-wrap">
            {testimonials.map((testimonial) => (
               <TestimonialCard key={testimonial.id} data={testimonial} />
            ))}
         </div>
      </div>
   );
};

export default Testimonials;
