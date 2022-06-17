import React from 'react';
import ellipse from "../../img/sectionImg/Ellipse 2.png";
import polygon from "../../img/sectionImg/Polygon 3.png";
import {NavLink} from "react-router-dom";


const Motion = () => {
    const section = {
        background: "#001355",
        boxShadow: "0 0 10px 0 "

    }
    const block = {
        background: "white",
        clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 50%)"


    }
    return (
        <div className="container " style={section}>
            <div className="flex justify-between overflow-hidden ">
                <div className="-mt-5">
                    <img src={ellipse} alt=""/>
                </div>
                <div style={block}>
                    <h6>Логин</h6>
                    <input type="text" id="voice-search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 text-center h-10
                            pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required/>
                    <h6>Пароль</h6>
                    <input type="text" id="voice-search"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 text-center h-10
                            pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required/>
                    <NavLink to={'/admin/test'}>
                        <button className=" flex flex-wrap justify-center items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800
                             focus:ring-purple-300 font-medium rounded-lg
                            text-sm px-10 py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                            ">Войти</button>
                    </NavLink>


                </div>
                <div className="mt-44 ">
                    <img src={polygon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Motion;