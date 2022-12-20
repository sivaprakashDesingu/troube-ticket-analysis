import React, { Component } from 'react';
import data from './myservice.json'
//import './../App.css';
const comp=[
    'hc',
    'arm',
    'vz-ind'
]
const renderresponsibilites =(data) =>{
    return data.map((itm,i) => {
        return(
            <li kay={`${i} 1`}>{itm}</li>
        )
    })
}
const renderExperience = () => {
    const { experience } = data[0]
    return experience.map((item, i) => {
        return (
            <div className="wrp hcExp">
                <div className={comp[i]}>
                    <span className="indicator"></span>
                    <div className="des left">
                        {/* <h4>{item.Designation} </h4> */}
                        <p className="company-name">{item.employee}</p>
                        <p className="place">{item.place}</p>
                        <p className="gryText">{item.duration}</p>
                    </div>
                    <div className="dis">
                        <h4>{`${item.Designation} - (${item.Role})`}</h4>

                        <h5>Responsibilities</h5>
                        <ul>
                            {renderresponsibilites(item.responsibilities)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    })
}
export default function MyWorks(props) {

    return (
        <div className="content">
            <h2 className="sectionMainheading">My Wonderfull Work History</h2>
            <div className="exp-wrapper">
                <div className="wxpwrp">
                    <span className="line"></span>
                    <span className="indicator"></span>
                    <span className="indicator btm"></span>
                    <div className="roleWrapper">
                        {renderExperience()}
                    </div>

                </div>
            </div>
        </div>
    )


}