import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chilie from '../red1.png';
import User from '../user.jpg';
import Call from '../phone-call.ddd31e53.webp';
import Whatsapp from '../whatsapp.243955d2.webp';

function ProductDetails() {
   const { productId } = useParams();
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios(
            `https://fakestoreapi.com/products/${productId}`
         );

         setData(result.data);
         //console.log(result);
      };

      fetchData();
   }, []);

   return (
      <>
         <section className='text-gray-700 body-font overflow-hidden bg-white'>
            <div className='container px-96 py-24 mx-auto'>
               <div className='px-5'>
                  <img
                     src={Chilie}
                     alt='ecommerce'
                     className='w-96 p-4 m-8 mt-0 object-cover object-center rounded border border-gray-200'
                  />
                  <hr className='border-t-2 border-black'  />
                  <div className='flex mt-2 items-center justify-between'>
                     <span className='text-x font-bold text-green-500 dark:text-white'>
                        Verified by owner
                     </span>
                     <span class="border-r-2 border-black h-16 mb-2"></span>
                     <span className=' w-20 flex text-x font-bold text-gray-500 dark:text-white'>
                        <img className='mt-2 mr-2 w-8 h-8' src={User} alt='image' />
                        <p>Sneha Saxena</p>
                     </span>
                     <span class="border-r-2  border-black h-16 mb-2"></span>
                     <span className='flex'>
                        <img className='w-8 h-8' src={Call} alt='image' />
                        {/* <img className='w-8 h-8' src={Whatsapp} alt='image' /> */}
                     </span>
                  </div>
                  <hr className='border-t-2 border-black' />
                  
                  <h5 className='text-3xl font-bold text-gray-900 dark:text-white'>
                     ₹{data.price}
                  </h5>
                  <p className='text-xl mt-3 text-gray-900 dark:text-white'>
                     {data.title}
                  </p>
                  <hr className='border-t-2 mt-3 mb-3 border-black' />
                  Discriptions -
                  <hr className='border-t-2 mt-3 mb-3 border-black' />
                  SUPER SPICY RED CHILIES AT YOUR DOORSTEP. GRAB IT TODAY OR REGRET IT TOMMOROW.
               </div>
            </div>
         </section>
      </>
   );
}

export default ProductDetails;
