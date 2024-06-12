import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='px-10 py-4 flex items-center justify-between bg-white shadow-md'>
       
       <div className='text-4xl uppercase font-bold text-blue-500'>
        MERO BRAND
       </div>

       <div className='flex items-center gap-8'>
        <ul className='flex gap-8'>
            <li className='hover:text-blue-500 transition duration-300'>
              <Link to="/todos">Todos</Link>
            </li>
            <li className='hover:text-blue-500 transition duration-300'>
              <Link to="/products">Products</Link>
            </li>
        </ul>
        <Link to="/login">
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
            Login
          </button>
        </Link>
       </div>
      
    </div>
  );
}

export default Navbar;
