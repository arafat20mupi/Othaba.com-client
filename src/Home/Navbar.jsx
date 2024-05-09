import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        toast.success('Successfully logout!')
    }

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <img className='w-16 mr-1 md:mr-5 rounded-full ' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <h2 className='text-2xl md:text-3xl font-bold uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>House for sale</h2>
                        <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex md:gap-5 lg:items-center lg:mx-8`}>
                        <NavLink to={"/"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>Home</NavLink>
                        {
                            user && <NavLink to={"/updateProfile"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>Update Profile</NavLink>
                        }
                        {
                            user && <NavLink to={"/userProfile"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>User Profile</NavLink>
                        }
                        <NavLink to={"/contact"} className={({ isActive, isPending }) => isActive ? "active text-red-600 hover:underline" : isPending ? "pending " : "block px-3 py-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}>About</NavLink>
                        <div className="flex items-center mt-4 lg:mt-0">
                            {user ? (
                                <div className="flex gap-2 items-center">

                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img title={user?.displayName} src={user?.photoURL || "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"} className="object-cover w-full h-full" alt="avatar" />
                                    </div>
                                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{user?.displayName}</h3>
                                    <button onClick={() => handleLogOut()} className='btn btn-success text-white btn-sm'>Log Out</button>
                                </div>
                            ) : (
                                <Link to={"/login"} className='btn btn-accent btn-sm font-bold'>Log in</Link>
                            )}
                        </div>


                    </div>


                </div>
            </div>
        </nav >
    );
};

export default Navbar;