import React from 'react';

import mac from "../img/sectionImg/Мокап.png"
import ellipse from "../img/sectionImg/Ellipse 2.png"
import polygon from "../img/sectionImg/Polygon 3.png"
import { NavLink} from "react-router-dom";


const Section = () => {

    const section = {
        background: "#001355",
        boxShadow: "0 0 10px 0 "
    }

    return (
        <div>
            <div className="container " style={section}>
                <div className="flex justify-between overflow-hidden ">
                    <div className="-mt-5">
                        <img src={ellipse} alt=""/>
                    </div>
                    <div className="mt-40">
                        <img src={mac} alt=""/>
                    </div>
                    <div className="mt-44 ">
                        <img src={polygon} alt=""/>
                    </div>

                </div>
                <div className=" text-center -mt-12">
                      <NavLink   to={'/connect'}>
                          <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800
                             focus:ring-purple-300 font-medium rounded-lg
                            text-sm px-10 py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Подключиться</button>
                      </NavLink>




                </div>


            </div>
        </div>
    );
};

export default Section;