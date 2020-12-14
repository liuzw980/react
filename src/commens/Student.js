import React from 'react'

export default function Student(props) {
    console.log(props);
    return (
        <div>
           <p>{props.name}</p> 
           <p>{props.aa}</p> 
        </div>
    )
}
