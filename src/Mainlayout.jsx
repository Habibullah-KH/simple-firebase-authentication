import {Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import Navbar from "./assets/component/Navbar";

const Mainlayout = () => {
    return (
        <>
<div>
         <Toaster />

{/* Navbar */}
<div>
<Navbar/>
</div>

{/* Chield element */}
<Outlet/>
</div>
        </>
    );
};

export default Mainlayout;