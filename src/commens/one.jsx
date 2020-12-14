import React, { Component } from 'react'

export default class one extends Component {
    
    constructor() {
        super();
        this.state = {
            num:1,
            arr: [
                { id: 1, name: "张三", paice: 2, num: 1 },
                { id: 2, name: "李四", paice: 2, num: 2 },
                { id: 3, name: "王二", paice: 2, num: 1 },
                { id: 4, name: "麻子", paice: 2, num: 1 }
            ]
        }
       
    }
    add(index){
         let{arr}=this.state
         arr[index].num++;
         this.setState({
             arr:arr,
   
         })
    }
    cul(index){
        let{arr}=this.state
        
        if(arr[index].num<=0){
            arr[index].num=0;    
        }else{
            arr[index].num--;     
        }
        this.setState({
            arr
        })
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <table border="1" width="500px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>名称</th>
                            <th>数量</th>
                            <th>价格</th>
                            <th>操作</th>
                            <th>总价</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td>香蕉</td>
                            <td>2</td>
                            <td>6</td>
                            <td><button >-</button>1<button>+</button></td>
                            <td>2</td>
                        </tr> */}
                    
                            {this.state.arr.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.paice}</td>
                                    <td>{item.num}</td>
                                    <td><button onClick={()=>this.cul(index)}>-</button><span>{item.num}</span><button onClick={()=>this.add(index)}>+</button></td>
                                    <td>{item.num*item.paice}</td>
                                </tr> 
                                )
                            })}
                        
                    </tbody>
                </table>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
