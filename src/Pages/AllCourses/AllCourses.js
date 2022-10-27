import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';

const AllCourses = () => {
    const courses = useLoaderData([])
    return (
        <div>
            <div className='grid md:grid-cols-5'>
                <div className="left-side-bar w-5/5 mx-auto">
                    {
                        courses.map(course => <SideBar
                            key={course._id}
                            course={course}
                        ></SideBar>)
                    }
                </div>
                <div className="all-course col-span-4">
                    <h2 className='py-8 text-violet-800 text-center text-5xl font-semibold'>Explore Your Course</h2>
                    <div className='md:grid md:grid-cols-3'>
                        {
                            courses.map(course => <Course
                                key={course._id}
                                course={course}
                            ></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;