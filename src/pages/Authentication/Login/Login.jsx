import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="w-full flex">
                <div className="w-1/2 p-10">
                    <div className="w-3/4 mx-auto border-2 p-10 bg-[#FAFAFA] shadow-sm space-y-2">
                        <h1 className="font-medium text-3xl">Please Login</h1>
                        <p className="font-medium text-base text-[#707070]">Enter your Credentials to access your account</p>
                        <form>
                            <label htmlFor="Email address" className="block text-base text-[#707070]">Email address</label>
                            <input type="email" placeholder="Enter your email" className="w-full mb-5 p-2 text-base font-normal border border-[#DEDEDE] text-black rounded" />
                            <label htmlFor="Password" className="block text-base text-[#707070]">Password</label>
                            <input type="password" placeholder="Enter your password" className="w-full mb-5 p-2 text-base font-normal border border-[#DEDEDE] text-black rounded" />

                            <div>
                                <input type="checkbox" className="hover:cursor-pointer" /> <span className="font-medium ">I aggre to the <span className="hover:underline hover:cursor-pointer">Terms and Policy</span></span>
                            </div>

                            <input type="submit" value="Sign in" className="text-white bg-black w-full p-3 rounded-md my-5 hover:cursor-pointer " />
                        </form>
                        <div className="flex items-center gap-1">
                            <div className="w-full border-2">
                                <hr />
                            </div>
                            <div className="text-lg font-medium">or</div>
                            <div className="w-full border-2"><hr /></div>
                        </div>
                        <div className="flex gap-5">
                            <button className="w-full text-center font-medium border border-[#D9D9D9] rounded-md py-4 px-5">
                                <div className="flex items-center gap-2">
                                    <span><FaGoogle /></span> <span>Sign in Google</span>
                                </div>
                            </button>

                            <button className="w-full border border-[#D9D9D9] text-center font-medium rounded-md py-4 px-5">
                                <div className="flex items-center gap-2">
                                    <span><FaGithub /></span>
                                    <span>Sign in GitHub</span>
                                </div>
                            </button>
                        </div>

                        <div className="text-center">
                            <span>Have not account? <Link to='/register'><span className="text-blue-500 hover:underline">sign-up</span></Link></span>
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

export default Login;
