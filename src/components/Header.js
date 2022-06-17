import React from 'react';
import Motion from '../img/image 5.svg'
import Rus from '../img/rus.svg'
import {NavLink} from "react-router-dom";


const Header = () => {
    const header = {
        background: "#001355",
        boxShadow: "0 0 10px 0 gray"
    }


    return (
        <div className='container'>
            <div style={header} className='flex justify-between p-5'>
                <div>
                    <NavLink to={'/admin'} className='flex  justify-between flex-wrap text-white mx-20'>
                        <img src={Motion} alt=""/>
                        <h3 style={{margin: "auto"}}>MOTION <br/>TEST</h3>
                    </NavLink>

                </div>
                <div>
                    <button className='bg-purple-800 flex flex-wrap justify-between items-center rounded-3xl m-3 p-3  mx-20 text-white'>
                        <img src={Rus} alt=""/>
                        <h4>рус</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;