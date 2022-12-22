import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCheckout = () => {
  const course = useLoaderData();
  console.log(course.title);
  const handleBuyNow = () => {
    toast.success("Purchase complete!");
  };
  return (
    <div className="w-2/5 mx-auto bg-slate-200 p-6 mt-24">
      <h5 className="font-semibold">Course Name: {course.title}</h5>
      <h6 className="font-semibold">Price: ${course.price}</h6>
      <button
        onClick={handleBuyNow}
        className="bg-cyan-500 text-white py-4 px-6 rounded-lg mt-4"
      >
        Buy Now
      </button>
      <ToastContainer />
    </div>
  );
};

export default SingleCheckout;
