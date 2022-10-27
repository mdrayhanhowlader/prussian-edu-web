import React from 'react';

const SingleBlog = ({blog}) => {
    const {question, answer} = blog
    return (
        <div>
            <h2 className='text-2xl font-semibold text-violet-400'>Q: {question}</h2>
            <p className='text-md font-semibold text-slate-500'><span className='text-bold text-violet-900'>Ans: </span>{answer}</p>
        </div>
    );
};

export default SingleBlog;