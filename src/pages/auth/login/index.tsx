import { useNavigate } from "react-router"

export default function Login() {

    const navigate = useNavigate()

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#0B0B22] relative">
            <div className="background w-full h-full">
                <div className="circle circle-pink"></div>
                <div className="circle circle-cyan"></div>
                <div className="circle circle-orange"></div>
            </div>
            <form action="POST" className="w-[31.625rem] h-[50.5625rem] bg-white/5 rounded-[1.25rem] px-[3.25rem] pt-[2.875rem] pb-[1.75rem] backdrop-blur-3xl z-30">
                <div className="flex justify-center">
                    <div className="w-[4.8125rem] h-[1.6875rem]">
                        <img className="w-full h-full object-cover" src="/images/ogma.png" alt="OGMA" />
                    </div>
                </div>
                <div className="text-white mt-[3.625rem]">
                    <h1 className="text-3xl font-bold text-center leading-[3rem]">Connexion</h1>
                    <p className="text-base mt text-center mt-2 leading-8 max-w-[21.8125rem]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>

                <div className="mt-[3.75rem]">
                    <input type="text" name="email" id="email" placeholder="Email Address" className="h-[3.25rem] w-full bg-white py-[0.9375] px-4 rounded-[0.1875rem] placeholder:font-semibold text-[#161629]" />
                    <input type="password" name="password" id="password" placeholder="Password Address" className="h-[3.25rem] w-full bg-white py-[0.9375] px-4 rounded-[0.1875rem] mt-3" />
                    <a href="#" className="text-[#16FCD2] mt-2 text-right block text-base">Mot de passe oublié?</a>
                </div>

                <button type="submit" className="bg-primary w-full py-[0.9375rem] rounded-[0.1875rem] mt-[1.75rem] text-white" onClick={handleSubmit}>
                    Connexion
                </button>

                <p className="strike">Or</p>

                <div className="mt-[1.75rem]">
                    <button className="bg-white w-full py-[0.9375rem] rounded-[0.1875rem] font-semibold text-primary" aria-label="Login with Google">
                        <i className="fa-brands fa-google mr-[0.625rem]"></i>
                        <span>Continue with Google</span>
                    </button>
                    <button className="bg-facebook w-full py-[0.9375rem] rounded-[0.1875rem] mt-2 font-semibold text-white" aria-label="Login with Facebook">
                        <i className="fa-brands fa-facebook-f mr-[0.625rem]"></i>
                        <span>Continue with Facebook</span>
                    </button>
                </div>
                <p className="text-white mt-5 text-center leading-[2rem]">
                    Not a member?
                    <a href="#" className="text-primary underline ml-3">Inscription</a>
                </p>
            </form>
            <div className="bubbles">
                <div className="bubble bubble-pink z-40"></div>
                <div className="bubble bubble-green z-40"></div>
                <div className="bubble bubble-blue z-40"></div>
            </div>
        </div>
    )
}