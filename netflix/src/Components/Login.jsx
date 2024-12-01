// import React, { useState } from 'react';
// import Header from './Header';
// import axios from 'axios';
// import { API_ENDPOINT } from '../utils/constant';
// import toast from 'react-hot-toast';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser, setLoading } from '../redux/Slices/userSlice';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const isLoading = useSelector((state) => state.user.isLoading)
//     const [check, setCheck] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [fullName, setFullName] = useState('');
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             if (check) {
//                 dispatch(setLoading(true))
//                 // Login
//                 // const response = await axios.post(`${API_ENDPOINT}/login`, { email, password });
//                 const response = await axios.post(
//                     `${API_ENDPOINT}/login`,
//                     { email, password },
//                     { withCredentials: true } // This ensures the cookie is sent and stored
//                 );
//                 // Debugging response data
//                 console.log(response);

//                 if (response.status === 200) {
//                     dispatch(setLoading(false))
//                     toast.success(`Welcome ${response.data.user.fullName} on the Dashboard Page`);
//                     dispatch(setUser(response.data.user))

//                     navigate('/browse')
//                 }
//                 else {
//                     toast.error(response.data.message);
//                 }
//             } else {
//                 // Register
//                 dispatch(setLoading(true))
//                 const response = await axios.post(`${API_ENDPOINT}/register`, { fullName, email, password });
//                 console.log(response.data); // Debugging response data
//                 if (response.status === 201) {
//                     dispatch(setLoading(false))
//                     toast.success(response.data.message);
//                     setCheck(true)
//                 } else {

//                     toast.error(response.data.message);
//                 }
//             }
//         } catch (error) {
//             dispatch(setLoading(false))
//             console.log('ERROR RESPONSE', error);

//             // Handle different error scenarios
//             if (error.response) {
//                 switch (error.response.status) {
//                     case 400:
//                         // Handle invalid data or email doesn't exist
//                         if (error.response.data.message === 'Invalid Data') {
//                             toast.error('Invalid Data.');
//                         } else if (error.response.data.message === "Email doesn't Exist!") {
//                             toast.error("Email doesn't Exist!.");
//                         }
//                         break;
//                     case 409:
//                         // Handle invalid data or email doesn't exist
//                         if (error.response.data.message === 'This email already exists!') {
//                             toast.error('This email already exists!.');
//                         }
//                         break;
//                     case 401:
//                         // Handle incorrect password
//                         toast.error('Password is Incorrect');
//                         break;
//                     case 500:
//                         // Handle server error
//                         toast.error('An unexpected error occurred. Please try again.');
//                         break;
//                     default:
//                         toast.error('Something went wrong.');
//                 }
//             } else {
//                 toast.error('Network error. Please try again later.');
//             }
//         }

//         // Clear input fields after submitting
//         setFullName('');
//         setEmail('');
//         setPassword('');
//     }
//     return (
//         <div>
//             <Header />
//             <img
//                 src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
//                 alt="banner"
//                 className="h-screen w-full absolute z-[10]"
//             />
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-black w-1/4 z-30 absolute left-0 right-0 my-36 mx-auto flex items-center flex-col justify-center py-16 rounded-md opacity-90"
//             >
//                 <h2 className="mb-4 text-white font-bold">{check ? 'Login' : 'Sign Up'}</h2>
//                 <div className="flex-col flex w-2/3">
//                     {check && (
//                         <p>ahsan@gmail.com</p>
//                     )}
//                     {!check && (
//                         <input
//                             type="text"
//                             value={fullName}
//                             onChange={(e) => setFullName(e.target.value)}
//                             placeholder="Full Name"
//                             className="outline-none text-gray-400 border-2 rounded-sm py-3 my-1 px-3"
//                         />
//                     )}
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         className="outline-none text-gray-400 border-2 rounded-sm py-3 my-1 px-3"
//                     />
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         className="outline-none text-gray-400 border-2 rounded-sm py-3 my-1 px-3"
//                     />
//                     <button type="submit" className="bg-red-800 text-white font-bold py-2 my-1">
//                         {`${isLoading ? 'Loading...' : (check ? 'Login' : 'Register')}`}
//                     </button>
//                     <p>
//                         {check ? 'New to Netflix?' : 'Already have an account?'}{' '}
//                         <a
//                             href="#"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 setCheck(!check);
//                             }}
//                         >
//                             {check ? 'Sign Up' : 'Login'}
//                         </a>
//                     </p>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { API_ENDPOINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setLoading } from '../redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const isLoading = useSelector((state) => state.user.isLoading);
    const [check, setCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (check) {
                dispatch(setLoading(true));
                const response = await axios.post(
                    `${API_ENDPOINT}/login`,
                    { email, password },
                    { withCredentials: true }
                );
                if (response.status === 200) {
                    dispatch(setLoading(false));
                    toast.success(`Welcome ${response.data.user.fullName} on the Dashboard Page`);
                    dispatch(setUser(response.data.user));
                    navigate('/browse');
                } else {
                    toast.error(response.data.message);
                }
            } else {
                dispatch(setLoading(true));
                const response = await axios.post(`${API_ENDPOINT}/register`, { fullName, email, password });
                if (response.status === 201) {
                    dispatch(setLoading(false));
                    toast.success(response.data.message);
                    setCheck(true);
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            dispatch(setLoading(false));
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        toast.error(error.response.data.message || 'Invalid Data.');
                        break;
                    case 409:
                        toast.error('This email already exists!');
                        break;
                    case 401:
                        toast.error('Password is Incorrect');
                        break;
                    case 500:
                        toast.error('An unexpected error occurred. Please try again.');
                        break;
                    default:
                        toast.error('Something went wrong.');
                }
            } else {
                toast.error('Network error. Please try again later.');
            }
        }
        setFullName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <Header />
            <img
                src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
                alt="banner"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <form
                onSubmit={handleSubmit}
                className="relative z-10 bg-black/90 max-w-lg mx-auto mt-20 p-8 sm:mt-36 rounded-lg flex flex-col items-center sm:w-3/4 md:w-2/3 lg:w-1/3"
            >
                <h2 className="mb-4 text-xl font-bold">{check ? 'Login' : 'Sign Up'}</h2>
                <div className="w-full space-y-4">
                    {!check && (
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Full Name"
                            className="w-full p-3 rounded bg-gray-800 text-gray-300 outline-none focus:ring focus:ring-red-500"
                        />
                    )}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-3 rounded bg-gray-800 text-gray-300 outline-none focus:ring focus:ring-red-500"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-3 rounded bg-gray-800 text-gray-300 outline-none focus:ring focus:ring-red-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 rounded bg-red-700 hover:bg-red-800 text-white font-bold transition"
                    >
                        {isLoading ? 'Loading...' : check ? 'Login' : 'Register'}
                    </button>
                    <p className="text-center">
                        {check ? 'New to Netflix?' : 'Already have an account?'}{' '}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setCheck(!check);
                            }}
                            className="text-red-500 hover:underline"
                        >
                            {check ? 'Sign Up' : 'Login'}
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
