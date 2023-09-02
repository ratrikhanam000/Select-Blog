import { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='flex justify-between'>
            <div className='w-3/5'>               
            {
              blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
            }
            </div>
            <div className='bg-lime-200 w-4/12'>
               <p></p>
               <p>Bookmarked Blogs</p>
            </div>
        </div>
    );
};

export default Blogs;