import { useRef, useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineKey } from 'react-icons/hi';
import { BsFillHandbagFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; 
import SignInOptions from '../components/SignInOptions';

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/login")
    }

  return (
    <section className='md:w-11/12 mx-auto mb-6'>
        <section className='border-2 rounded-lg border-solid w-11/12 md:w-[420px] mx-auto my-auto min-h-[430px] p-2 md:p-7'>
            <h1 className='text-[24px] font-medium text-center'>Welcome Back!</h1>
            <p className='text-sm text-[#828282] text-center'>Sign in to access your account</p>
            <p ref={errRef} aria-live='assertive' className='text-sm font-semibold py-2 px-2 text-[#d53232] rounded-lg'>{errMsg}</p>
            <form className='mt-4' onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label><br />
                <input 
                    type="text"
                    id='firstname'
                    ref={userRef}
                    className='w-full p-1 rounded my-2 border-2'
                    autoComplete='off'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                /><br />
                <label htmlFor="lastname">Last Name</label><br />
                <input 
                    type="text"
                    id='lastname'
                    ref={userRef}
                    className='w-full p-1 rounded my-2 border-2'
                    autoComplete='off'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                /><br />
                <label htmlFor="email">Email</label><br />
                <input 
                    type="email"
                    id='email'
                    ref={userRef}
                    className='w-full p-1 rounded my-2 border-2'
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                /><br />
                <label htmlFor="phone">Phone Number</label><br />
                <input 
                    type="tel"
                    id='phone'
                    ref={userRef}
                    className='w-full p-1 rounded my-2 border-2'
                    autoComplete='off'
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                /><br />
                <label htmlFor="password">Password</label><br />
                <input 
                    type="password"
                    id='password'
                    className='w-full p-1 rounded mt-2 border-2'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <p className='text-black cursor-pointer'>forgot password?</p>
                <button className='text-black bg-gray-300 w-full py-1 rounded mt-10 h-[40px]' type='submit'>Sign Up</button>
                <p className='text-center text-gray-300 mt-3'>OR</p>
                <div className='flex flex-wrap justify-center gap-[4px] mx-auto my-4 w-11/12'>
                    <SignInOptions text='GitHub' image={<BsGithub size='28px'/>}/>
                    <SignInOptions text='Google' image={<FcGoogle size='28px'/>}/>
                    <SignInOptions text='SSO' image={<HiOutlineKey size='28px' color='gray'/>}/>
                </div>
            </form>
        </section>
    </section>
  )
}

export default SignUp