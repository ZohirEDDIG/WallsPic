import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link, type Register } from 'react-router-dom';

type RegisterFormInputs = {
    username: string;
    email: string;
    password: string;
};

const Register = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<RegisterFormInputs>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<RegisterFormInputs> = (data: RegisterFormInputs) => {
        console.log('Form data: ', data);
        reset();
    };

    return (
        <main className='auth h-screen w-screen'>

            <div className='h-full w-full flex flex-col justify-center items-center gap-y-8'>

                <Link to='/' className='text-white text-4xl font-bold'>wallspic<span className='text-yellow-400'>.</span></Link>

                <div className='bg-white sm:w-120 p-4 mx-4 rounded-md flex flex-col gap-y-6 shadow-xl'>

                    <div className='flex gap-x-6'>

                        <Link to='/login' className='text-gray-600 hover:text-black'>Login</Link>

                        <Link to='/register' className='underline decoration-yellow-400'>Register</Link>

                    </div>

                    <form className='w-full flex flex-col gap-y-3' onSubmit={handleSubmit(onSubmit)} noValidate>

                        <div className='flex flex-col gap-y-2'>

                            <input 
                                className='w-full text-sm p-2 border border-gray-200 rounded-sm focus:border-yellow-400'
                                type='text' 
                                placeholder='Username' 
                                { ...register('username', {
                                    required: 'Username is required',
                                    pattern: { value: /^[a-zA-Z0-9_]{3,15}$/, message: '3 to 15 chars, only letters, numbers, and underscores' }
                                })}
                            />

                            {errors.username && <p className='text-red-500 text-xs'>{errors.username.message}</p>}
                        
                        </div>

                        <div className='flex flex-col gap-y-2'>

                            <input 
                                className='w-full text-sm p-2 border border-gray-200 rounded-sm focus:border-yellow-400'
                                type='email' 
                                placeholder='Email' 
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Enter a valid email address'},
                                })}
                            />

                            {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
                        
                        </div>

                        <div  className='flex flex-col gap-y-2'>

                            <input 
                                className='w-full text-sm p-2 border border-gray-200 rounded-sm focus:border-yellow-400'
                                type='password' 
                                placeholder='Password'
                                {...register('password', {
                                    required: 'Password is required',
                                    pattern: { 
                                        value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,14}$/, 
                                        message: '8 to 14 chars, with upper, lower, number, symbol, no spaces.'
                                    },
                                })} 
                            />

                            {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                        
                        </div>

                        <button type='submit' disabled={isSubmitting} className='bg-yellow-400 p-2 rounded-sm hover:bg-yellow-500'>
                            
                            {isSubmitting ? 'Registering...' : 'Register'}
                        
                        </button>

                    </form>

                    <p className='text-gray-600 text-xs text-center'>

                        By registering an account you agree to our &nbsp;
                        
                        <Link to='/user-agreement' className='underline hover:text-black'>user agreement</Link> 
                        
                        &nbsp; and &nbsp; 
                        
                        <Link to='/privacy-policy' className='underline hover:text-black'>privacy policy</Link>.

                    </p>

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

export default Register;