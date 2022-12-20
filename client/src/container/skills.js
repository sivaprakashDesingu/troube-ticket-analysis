import React, { Component } from 'react';
import data from './myservice.json'
//import './../App.css';

const color = [
    'maron-red',
    'pink-red',
    'voilet-pink',
    'brown-green',
    'blue-pink',
    "green-pink",
    "green-blue",
    "blue-orange",
    "green-maron",
    "blue-yellow",
    
]
const renderSkills = () => {
    const { skills } = data[0]
    return skills.map((_item, i) => {
        return (
            <div key={i} className="skill-item">
                <div className="item-info">
                    <span>{`${_item.percentage} %`}</span>
                    <span>{_item.technology}</span>
                </div>
                <span className={`bar`}>
                <span style={{width:_item.percentage+'%'}} className={`top-bar ${color[i]}`}></span>
                </span>
                
            </div>
        )
    })

}
export default function Skills(props) {

    return (
        <div className="content">
            <h2 className="sectionMainheading">My Skills</h2>
            <div className="skill-wrapper">
                {renderSkills()}
            </div>
        </div>
    )


}