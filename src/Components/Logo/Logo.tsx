import LOGO from '../../assets/Logo.png'

const Logo = () => {
    return (
        <div>
             <div className='flex gap-1 items-center'>
            <img src={LOGO} alt="SauqFresh Logo" className='size-15' />
            <h3 className='font-bold flex flex-col'>
                <span className='text-red-600 uppercase text-xl'>Souq</span>
                <span className="text-green-600 -mt-2 uppercase tracking-wide text-lg">Fresh</span>
            </h3>
        </div>
        </div>
    );
};

export default Logo;