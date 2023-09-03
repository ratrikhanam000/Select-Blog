import React from 'react';

const Cart = (props) => {
    const titles = props.titles;

    return (
        <div className="">
            <h3 className="w-6/12 bg-white m-auto text-center py-3">{props.blogTime}</h3>
            <h3 className="w-6/12 bg-white m-auto text-center py-3 my-3">Bookmarked Blogs :{titles.length}</h3>
            {titles.map(title => <h3 className="font-bold uppercase w-6/12 bg-white m-auto text-center py-3 border">{title}</h3>)}

        </div>
    );
};

export default Cart;