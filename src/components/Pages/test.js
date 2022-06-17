import React from 'react';
import fig from '../../img/Ellipse 2.svg'

const Test = () => {
    const section = {
        background: "#001355",
        boxShadow: "0 0 10px 0 "
    }
    const figur = {
        marginLeft: "-30"
    }
    return (
        <div className="container " style={section}>
            <div className="flex justify-end overflow-hidden ">
                <div className='-mt-5'>
                    <img src={fig} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Test;