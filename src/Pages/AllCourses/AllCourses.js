import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const AllCourses = () => {
  const courses = useLoaderData([]);
  return (
    <div>
      {/* new section start from here*/}
      <div>
        <main>
          <section>
            <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-12 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
              <div class="col-span-4  rounded-md flex items-center">
                <div className="md:grid md:grid-cols-3 md:gap-4">
                  {courses.map((course) => (
                    <Course key={course._id} course={course}></Course>
                  ))}
                </div>
              </div>
              <div class="h-96 col-span-1 ">
                <div class="bg-white  rounded-md">
                  <h1 class="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">
                    Courses
                  </h1>
                  <div class="bg-white rounded-md list-none  text-center ">
                    {courses.map((course) => (
                      <li key={course._id} class="py-3 border-b-2">
                        <Link
                          to={`/checkout/${course._id}`}
                          class="list-none  hover:text-indigo-600"
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AllCourses;
