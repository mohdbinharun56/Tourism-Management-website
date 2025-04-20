import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseContext from "../../../sharedComponents/ContextProvider/UseContext";
import Swal from "sweetalert2";

const Register = () => {
    const {registerUser,updateUser} = UseContext();

    const [error,setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRegister = (data,e) => {
        // console.log(data);
        e.preventDeafult();
        const {name,email,password,photo} = data;

        if(password.length < 6){
            setError("Password must contain at least 6 characters");
            return;
        }
        if(!/^(?=.*[A-Z]).*$/.test(password)){
            setError("Password must contain an uppercase letter");
            return;
        }
        if(!/^(?=.*[a-z]).*$/.test(password)){
            setError("Password must contain a lowercase letter");
            return;
        }

        setError("");
        console.log(name,email,password,photo);
        registerUser(email,password)
        .then(userCredential=>{
            const user = userCredential.user;
            console.log(user);
            // add display name and photo-url using updateProfile
            updateUser(name,photo)
            .then(()=>{
                Swal.fire({
                    title: "Success",
                    text: "Register success",
                    icon: "success"
                })
                e.target.reset();
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>console.error(error.message))
    }


    return (
        <>
            <div className="w-full flex">
                <div className="w-1/2 p-10">
                    <div className="w-3/4 mx-auto border-2 p-10 bg-[#FAFAFA] shadow-sm space-y-2">
                        <h1 className="font-medium text-3xl">Register</h1>
                        <p className="font-medium text-base text-[#707070]">Register your credentials to access your account</p>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <label htmlFor="Name" className="block text-base text-[#707070]">Name</label>
                            <input type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter your name" className="w-full p-2 text-base font-normal border border-[#DEDEDE] text-black rounded"
                            />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                            
                            <label htmlFor="Email address" className="block mt-3 text-base text-[#707070]">Email address</label>
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter your email" className="w-full p-2 text-base font-normal border border-[#DEDEDE] text-black rounded"
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}

                            <label htmlFor="Password" className="block mt-3 text-base text-[#707070]">Password</label>
                            <input type="password"
                                {...register("password", { required: true })}
                                placeholder="Enter your password"
                                className="w-full p-2 text-base font-normal border border-[#DEDEDE] text-black rounded"
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            
                            <label htmlFor="Photo" className="block mt-3 text-base text-[#707070]">PhotoURL</label>
                            <input type="text"
                                {...register("photo", { required: true })}
                                placeholder="Enter your photo-url" className="w-full p-2 text-base font-normal border border-[#DEDEDE] text-black rounded"
                            />
                            {errors.photo && <span className='text-red-500'>This field is required</span>}
                            {
                                error && <span className='text-red-500'>{error}</span>
                            }
                            <input type="submit" value="Register" className="text-white bg-black w-full p-3 rounded-md my-5 hover:cursor-pointer " />
                        </form>
                        <hr />
                        <div className="text-center">
                            <span>Have an account? <Link to='/login'><span className="text-blue-500 hover:underline">sign-in</span></Link></span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 border-2 border-red-500 p-10 bg-black text-white">
                    <h1 className="text-4xl"> Added vector Image and text</h1>
                </div>
            </div>
        </>
    );
};

export default Register;
