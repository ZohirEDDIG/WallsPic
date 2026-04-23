import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

type LoginFormInputs = {
    email: string;
    password: string;
};

const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LoginFormInputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = (data: LoginFormInputs) => {
        console.log('Form data: ', data);
        reset();
    };

    return (
        <main className='auth h-screen w-screen'>

            <div className='h-full w-full flex flex-col justify-center items-center gap-y-8'>

                <h2 className='text-white text-4xl font-bold'>wallspic<span className='text-yellow-400'>.</span></h2>

                <div className='bg-white sm:w-105 p-4 rounded-md flex flex-col gap-y-6 shadow-xl'>

                    <div className='flex gap-x-6'>

                        <Link to='/login' className='underline decoration-yellow-400'>Login</Link>

                        <Link to='/register' className='text-gray-600 hover:text-black'>Register</Link>

                    </div>

                    <form className='w-full flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)} noValidate>

                        <div  className='flex flex-col gap-y-2'>

                            <input 
                                className='w-full text-sm p-2 border border-gray-200 rounded-sm focus:border-yellow-400'
                                type='email' 
                                placeholder='Email' 
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                            />

                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                        
                        </div>

                        <div>

                            <div className='p-2 border border-gray-200 rounded-sm flex justify-between gap-x-2 focus-within:border-yellow-400'>

                                <input 
                                    className='text-sm flex-1'
                                    type='password' 
                                    placeholder='Password' 
                                    {...register('password', {
                                        required: 'Password is required',
                                    })} 
                                />

                                <Link to='/forgot-password' className='text-gray-600 text-sm underline hover:text-black'>Forgot Password</Link>

                            </div>

                            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}

                        </div>


                        <button type='submit' disabled={isSubmitting} className='bg-yellow-400 p-2 rounded-sm hover:bg-yellow-500'>

                            {isSubmitting ? 'Logging in...' : 'Login'}

                        </button>

                    </form>

                    <div className='flex justify-center items-center gap-x-2'>

                        <span className='bg-gray-200 h-px w-15 sm:w-10'></span>

                        <p className='text-gray-600 text-xs sm:text-base'>With your social network</p>

                        <span className='bg-gray-200 h-px w-10 sm:w-20'></span>

                    </div>

                    <div className='flex justify-center gap-x-2'>

                        <button type='button' className='bg-facebook text-white px-4 py-2 rounded-md shadow-xl flex items-center gap-x-2 transition hover:-translate-y-1'>

                            <img src='/Facebook.svg' alt='Facebook icon' className='w-5' />

                            Facebook
                        
                        </button>

                        <button type='button' className='bg-gray-100 text-black px-4 py-2 rounded-md shadow-xl flex items-center gap-x-2 transition hover:-translate-y-1'>

                            <img src='/Google.svg' alt='Google icon' className='w-5' />
                            
                            Google
                        
                        </button>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Login;