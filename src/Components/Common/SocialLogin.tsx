
import { FaGoogle } from "react-icons/fa";

import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const {GoogleSignIn} = useAuth()
  const handleGoogle = ()=>{
    GoogleSignIn()
    .then(res => console.log(res))
  }
   return (
    <button
    onClick={handleGoogle}
      className="bg-primary/90 text-white hover:bg-primary w-full flex items-center gap-2 py-2 px-5 text-center rounded-md justify-center"
    >
      <FaGoogle size={20} />
      <span className="text-base font-medium ">Continue With Google</span>
    </button>
  );
};


export default SocialLogin;