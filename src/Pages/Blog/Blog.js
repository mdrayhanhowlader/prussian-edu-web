import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const blogs = useLoaderData([])
    return (
        <div>
            <div className="blogs grid grid-cols-1 gap-4 w-4/5 mx-auto text-justify mt-16 p-4">
                {
                    blogs.map(blog => <SingleBlog
                        key={blog.id}
                        blog={blog}
                    ></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;