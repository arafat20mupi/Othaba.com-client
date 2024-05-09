import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, googleSignIn, facebookSignIn, githubSignIn, upDateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);

    const onSubmit = (data) => {
        const { usernameOrEmail, password, fullName, photoURL } = data;


        createUser(usernameOrEmail, password)
            .then(result => {
                upDateProfile(fullName, photoURL)
                    .then(() => {
                        if (result?.user) {
                            toast.success("User created successfully")
                            reset();
                            navigate(location.state?.pathname || "/");
                        }
                    })
            });
    };

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result?.user) {
                    toast.success('Successfully login!')
                    reset();
                    navigate(location.state?.pathname || "/");
                }
            });
    };

    const handleShowPassword = () => {
        setShow(!show);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Create an account</h1>
                <div className="space-y-2 text-sm">
                    <label htmlFor="fullName" className="block">
                        Your Name
                    </label>
                    <input {...register("fullName", { required: true })} type="text" name="fullName" id="fullName" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                    {errors.fullName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="photoURL" className="block">
                        photo URL
                    </label>
                    <input {...register("photoURL", { required: true })} type="text" name="photoURL" id="photoURL" placeholder="Enter Your Photo URL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                    {errors.photoURL && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="usernameOrEmail" className="block">
                        Username or Email
                    </label>
                    <input {...register("usernameOrEmail", { required: true })} type="email" name="usernameOrEmail" id="usernameOrEmail" placeholder="Username or Email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" />
                    {errors.usernameOrEmail && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            })}
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring"
                        />
                        <span className="absolute right-4 top-3" onClick={handleShowPassword}>{show ? <IoMdEyeOff className="text-xl" /> : <FaEye className="text-xl" />}</span>
                    </div>
                    {errors.password && errors.password.type === "required" && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    {errors.password && errors.password.type === "pattern" && (
                        <span className="text-red-500">
                            Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long
                        </span>
                    )}
                </div>
                <button type="submit" className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    Create an account
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
                <div className="flex items-center pt-4 space-x-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-gray-600">Create an account with social accounts</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => handleSocialLogin(googleSignIn)} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                    </button>
                    <button onClick={() => handleSocialLogin(facebookSignIn)} aria-label="Log in with Twitter" className="p-3 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></svg>
                    </button>
                    <button onClick={() => handleSocialLogin(githubSignIn)} aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg>
                    </button>
                </div>
                <p className="text-sm text-center gap-2 flex justify-center sm:px-6">
                    Already have an account?
                    <Link to={"/login"} className="underline hover:text-indigo-600">
                        Login
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default Register;