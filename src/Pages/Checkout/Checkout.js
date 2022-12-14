import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { toast } from "react-toastify";

const ref = React.createRef();

const Checkout = () => {
  const course = useLoaderData();
  console.log(course);

  const handleCheckOut = () => {
    return toast.success("Purchase has done", { autoClose: 500 });
  };

  return (
    <div
      className="mt-16 p-4 w-4/5 mx-auto md:grid md:grid-cols-2 bg-slate-50 rounded"
      ref={ref}
    >
      <div>
        <img className="w-5/5" src={course.author.img} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
        <p className="text-justify text-slate-700">{course.description}</p>
        <h6>{course.author.name}</h6>
        <p>
          <small>${course.price}.00</small>
        </p>
        <p>Rating: {course.rating.number}</p>
        <p>Level: {course.rating.Level}</p>
        <div className="flex justify-between">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                className="mt-6 px-8 py-4 bg-red-600 text-slate-50 font-semibold rounded-lg"
                onClick={toPdf}
              >
                Download PDF
              </button>
            )}
          </Pdf>
          <button className="mt-6 px-8 py-4 bg-red-600 text-slate-50 font-semibold rounded-lg">
            <Link
              to={`/singlecheckout/${course._id}`}
              onClick={handleCheckOut}
              className="text-slate-50"
            >
              Checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
