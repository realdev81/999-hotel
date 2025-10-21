import {useState} from 'react'
import AuthImageSlider from '../../components/authImageSlider';
import { useTranslation } from 'react-i18next';
import {IoIosMail, IoIosUnlock} from "react-icons/io"
import {FaRegEyeSlash, FaRegEye} from "react-icons/fa";
import Logo from "@/assets/logo.webp"
import LanguageSwitcher from "../../components/ui/languageSwitcher";
const Login = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        if(email === ""){
            console.log("email validation => ,", "you have to input email");
        }
        if(password === ""){
            console.log("password validation => ,", "you have to input password");
        }
        console.log(email, password);
    }
    return(
        <div className='min-h-screen'>
            {/* desktop layout */}
            <div className='h-screen w-screen hidden lg:flex bg-white'>
                <div className='w-1/2 items-center justify-center flex flex-col p-8'>
                    <div className='w-full max-w-md space-y-4'>
                        <div className='flex justify-end'>
                            <LanguageSwitcher/>
                        </div>
                        <div className='justify-center flex '>
                            <img src={Logo} alt="Logo" className='w-1/2'/>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl font-blod bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent'>
                                {t('common.welcomeBack')}
                            </h1>
                        </div>
                        <div className='space-y-6'>
                            <div className="space-y-2">
                                <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700"
                                >
                                {t('common.email')}
                                </label>
                                <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <IoIosMail className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors z-1" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('common.enterEmail')}
                                    className="w-full pl-11 pr-3 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                                    required
                                />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700"
                                >
                                {t('common.password')}
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <IoIosUnlock className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors z-1" />
                                    </div>
                                    <input
                                        type={showPassword ? "password" : "text"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder={t('common.enterPassword')}
                                        className="w-full pl-11 pr-3 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                                        required
                                    />
                                    <button 
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-color z-1'
                                    >
                                        {showPassword ? (<FaRegEyeSlash className='h-5 w-5'/>) : (<FaRegEye className='h-5 w-5'/>)}

                                    </button>
                                </div>
                            </div>
                            <button className='w-full py-2 rounded-full bg-gradient-to-bl from-blue-800 to-green-300 text-gray-200 text-xl hover:to-orange-400 focus:to-blue-700 hover:shadow-xl transform hover:-translate-y-0.5'>
                                {t('common.signIn')}
                            </button>
                        </div>
                        <div className='text-center mt-5'>
                            <p className="text-gray-500">
                                {t('common.dontHaveAccount')}{" "}
                                <a
                                href="/signup"
                                className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                                >
                                {t('common.createAccount')}
                                </a>
                            </p>

                            {/* Forgot Password Link */}
                            <div className="text-center">
                                <a
                                href="/forgot-password"
                                className="text-sm hover:underline text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                >
                                {t('common.forgotPassword')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full relative'>
                    <AuthImageSlider/>
                </div>
            </div>
            {/* mobile layout */}
            <div className='flex lg:hidden flex-col h-screen overflow-auto'>
                <div className='h-1/3 top-0 flex-shrink-0 sticky'>
                    <div className='h-full'>
                        <AuthImageSlider/>
                    </div>

                </div>
                <div className='w-full h-auto relative'>
                    <div className="absolute -mt-6 left-0 w-full h-full rounded-t-3xl bg-[#B1DF78] z-0"></div>
                    <div className="absolute -mt-3 left-0 w-full h-full rounded-t-3xl bg-[#3EB283] z-1"></div>
                    <div className='flex-1 bg-white rounded-t-3xl z-20 relative'>
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 z-2 bg-emerald-400 rounded-full"></div>
                        <div className="sm:p-8 p-4 pt-12">
                            {/* Language Switcher */}
                            <div className='flex justify-end'>
                                <LanguageSwitcher/>
                            </div>
                            
                            {/* Main Logo */}
                            <div className="flex justify-center mb-8">
                                <img src={Logo} alt="Logo" className="w-1/3" />
                            </div>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700"
                                    >
                                        {t('common.email')}
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <IoIosMail className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder={t('common.enterEmail')}
                                            className="w-full pl-12 sm:pr-4 pr-2 sm:py-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-semibold text-gray-700"
                                    >
                                        {t('common.password')}
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <IoIosUnlock className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder={t('common.enterPassword')}
                                            className="w-full pl-12 sm:pr-4 pr-2 sm:py-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-0 focus:border-emerald-500 transition-all duration-200"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? (
                                                <FaRegEyeSlash className="h-5 w-5" />
                                            ) : (
                                                <FaRegEye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleSubmit()}
                                    className="w-full cursor-pointer bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 !text-white font-bold py-2 sm:py-4 px-4 sm:px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                    {t('common.signIn')}
                                </button>
                                <div className="text-center mt-8">
                                    <p className="text-gray-500 sm:text-sm text-xs">
                                        {t('common.dontHaveAccount')}{" "}
                                        <a
                                        href="/signup"
                                        className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                                        >
                                        {t('common.createAccount')}
                                        </a>
                                    </p>

                                    {/* Forgot Password Link */}
                                    <div className="text-center">
                                        <a
                                        href="/forgot-password"
                                        className="text-sm hover:underline text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                        >
                                        {t('common.forgotPassword')}
                                        </a>
                                    </div>  
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default Login;

