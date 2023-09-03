// import React from 'react';

const Blog = (props) => {
    // console.log(props);
const {image , img ,name,title,mark,readTime, date,time,hashTeg ,bookmark}= props.blog;

const handleBookmark = props.handleBookmark;
    
const handleTime = props.handleTime;
    return (
        <div className="bg-lime-100 border border-lime-600 mb-4">
            <img src={image} alt="" className="w-full" />
            <div className="flex items-center justify-between">
            <div className="flex items-center">
               <div>
                   <img className=" w-14 h-14 rounded-full" src={img} alt="" />
                </div>
               <div>
                  <p>{name}</p>
                  <p>{date}</p>
               </div>
            </div>
            <p className="flex items-center">
                <span> {time} </span>
                <span className="mx-1"> {readTime} </span>
                <img className="w-5 h-5 cursor-pointer"
                onClick={() => handleBookmark(title)} src={bookmark} alt="" />
            </p>
            </div>
            <h3 className="text-2xl font-bold my-4 uppercase">{title}</h3>
            <p>{hashTeg}</p>
            <button className="text-red-600 underline  font-bold decoration-red-600" onClick={() => handleTime(time)}>readTime</button>
        </div>
    );
};

export default Blog;