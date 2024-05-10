
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const Root = () => {
    return (
        <div className='w-full mx-auto'>
            <Navbar />
            <div className='container mx-auto min-h-[calc(100vh-162.66px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;