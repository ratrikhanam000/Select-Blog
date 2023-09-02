// import React from 'react';

const Blog = (props) => {
    // console.log(props);
const {image , img ,name,title,mark, date,time,hashTeg ,bookmark}= props.blog
    return (
        <div className="bg-lime-100 border border-lime-600 mb-4">
            <img src={image} alt="" className="w-full" />
            <div className="flex items-center">
            <div className="flex items-center">
               <img className="w-1/12 h-1/12 rounded-full" src={img} alt="" />
               <div>
                  <p>{name}</p>
                  <p>{date}</p>
               </div>
            </div>
            <p>
                <span>{time} </span>
                <span>{mark} </span>
                <img className="w-5 h-5 inline" src={bookmark} alt="" />
            </p>
            </div>
            <h3 className="text-2xl font-bold my-4 uppercase">{title}</h3>
            <p>{hashTeg}</p>
            <button className="text-red-600 underline  font-bold decoration-red-600">readTime</button>
        </div>
    );
};

export default Blog;