import React, { useEffect, useState } from 'react';
import Blog from './Blog';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Cart';

const Blogs = () => {
    const[blogs,setBlog] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setBlog(data))     
    },[]);
    
    const [titles,setTitle] = useState([]);
    const handleBookmark = (blogTitle) =>{
        const isMatchFound = titles.filter((titles) => titles === blogTitle).length > 0;
        if (isMatchFound) {
            toast('Already Bookmarked')
        } else {
      setTitle([...titles, blogTitle]);
    }
     
    }
    const[times,setTimes]= useState(0);
    const handleTime = (time) =>{
        setTimes(times + time);
    }

    return (
        <div className="flex justify-between">
            <div className="w-3/5">                       
                {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}
                handleTime={handleTime} > </Blog>)}   <ToastContainer/>
            </div>
            <div className="bg-lime-200 h-3/6 w-1/3 py-8"> 
               <Cart blogTime={times} titles={titles} > </Cart>   
                     
            </div>
        </div>
    );
};

export default Blogs;