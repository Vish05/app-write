import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api/api';
import { logout } from "../utils/authSlice";

const Header = () => {
    const dispatch = useDispatch();

  const handleLogout = async () => {
      await api.deleteCurrentSession();
      dispatch(logout())
  }

    const { userId } = useSelector((state) => state.auth)
    
    console.log(userId);
  return (
    <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
               
            </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {userId ? <button className="text-sm font-semibold leading-6 text-gray-900">Log in
                    <span aria-hidden="true">&rarr;</span>
                  </button> : <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-900">Logout
                    <span aria-hidden="true">&rarr;</span>
                </button>}
                
            </div>
        </nav>
    </header>
  )
}

export default Header;
