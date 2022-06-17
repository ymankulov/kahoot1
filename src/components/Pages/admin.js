import React from 'react';
import ellipse from "../../img/sectionImg/Ellipse 2.png";
import polygon from "../../img/sectionImg/Polygon 3.png";

const Admin = () => {
    const section = {
        background: "#001355",
        boxShadow: "0 0 10px 0 "


    }

    return (
            <div className="container " style={section}>
                <div className="flex justify-between overflow-hidden ">
                    <div className="-mt-5">
                        <img src={ellipse} alt=""/>
                    </div>
                    <div className=' flex-wrap '>
                        <input type="text" id="voice-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 text-center h-10
                            pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="PIN-код игры " required/>
                        <input type="text" id="voice-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 text-center h-10
                            pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Nickname" required/>
                        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800
                             focus:ring-purple-300 font-medium rounded-lg
                            text-sm px-10 py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                            ">Подвердить</button>

                    </div>



                    <div className="mt-44 ">
                        <img src={polygon} alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Admin;