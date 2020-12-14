import React from 'react'

export default function shop(props) {
    console.log(props);
    return (
        <div>
            {(props.arr.map((item,index)=>{
                 return <p key={index}>{item.name}{item.paice}</p>
            }))}
         {/* <p>{props.arr[2].name}</p> */}
        </div>
    )
}
