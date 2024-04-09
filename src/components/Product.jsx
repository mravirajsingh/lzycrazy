import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import Location from '../location.png';
import Chilie from '../red1.png';

function Product() {
   const [data, setData] = useState([]);
   const newDate = new Date();

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios('https://fakestoreapi.com/products/');
         setData(result.data.slice(0,5));
      };

      fetchData();
   }, []);

   return (
      <>
         <div className='p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {data.map((item) => (
               
               <div
                  id={item.id}
                  className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
               >
                  <Link to={`/product/${item.id}`}>
                     <img
                        className='p-8 h-80'
                        src={Chilie}
                        alt='product image'
                     />
                  </Link>
                  <div className='px-5 pb-5'>
                  <div className='flex items-center justify-between'>
                        <span className='text-x font-bold text-gray-900 dark:text-white'>
                        ₹{item.price}
                        </span>
                        <span className='text-x text-gray-900 dark:text-white'>
                           Chilli
                        </span>               
                     </div>
                     <Link to={item.id}>
                        <p className='text-x mt-2 tracking-tight text-gray-900 dark:text-white'>
                           {item.title}
                        </p>
                     </Link>
                     <div className='flex mt-2 items-center justify-between'>
                        <span className='flex gap-1 text-x font-bold text-gray-900 dark:text-white'>
                        <img
                        className='w-3 h-5'
                        src={Location}
                        alt='product image'
                     />
                           Pune
                        </span>
                        <span className='text-x font-bold text-gray-900 dark:text-white'>
                        {newDate.toDateString().split(' ')[2]} {newDate.toDateString().split(' ')[1]}
                        </span>               
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}

export default Product;