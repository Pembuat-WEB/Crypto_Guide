import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const isAdmin = user.email === 'muchammadanggasetiawan@gmail.com'; 

      if (isAdmin) {
        navigate('/Admin');
      } else {
        navigate('/Sektor');
      }
    } catch (error) {
      console.error("Anda belum mendaftar:", error.message);
      alert('Email atau Password anda salah');
    }
  };

  return (
    <div className='text-white h-[100vh] flex items-center justify-center bg-gray-400'>
      <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
        <h1 className='text-4xl font-bold text-center mb-6'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='relative my-4'>
            <input
              type="email"
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor="email"
              className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email
            </label>
          </div>
          <div className='relative my-4'>
            <input
              type="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
              placeholder=''
              required
            />
            <label
              htmlFor="password"
              className='absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Password
            </label>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <input type="checkbox" id='Remember-Me' />
              <label htmlFor="Remember-Me" className='text-white'>Remember Me</label>
            </div>
          </div>
          <button
            type='submit'
            className='w-full mb-4 text-[18px] mt-6 rounded bg-blue-500 py-2 text-white hover:bg-blue-600 transition-colors duration-300'
          >
            Login
          </button>
          <div>
            Baru disini? <Link to='/Register' className='text-blue-400 hover:underline'>Buat akun baru</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
