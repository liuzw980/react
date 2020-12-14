// import logo from './logo.svg';
import './App.css';

function App() {
  let name ="张三"
  let age =18
  let isGood =false
  let arr=[
    {
      id:1,
      name:"张三",
      age:78
    },
    {
      id:2,
      name:"李四",
      age:78
    },
    {
      id:3,
      name:"王二",
      age:78
    },
  ]
  return (
    <div className="App">
            <div>姓名:{name}</div>
            <div>年龄:{age}</div>
            <div className="content">好好学习，天天向上</div>
            <div className={isGood?'select':'unescape'} >今天是个好天气</div>
            {/* 隔行变色 */}
            <ul>
             {arr.map((item,index)=>{
               return <li key={index} className={index%2===0?'unescape':'select'}>{item.name}</li>
             })}     
            </ul>
            <div className="box"> 
                 {arr.map((item,index)=>{    
                    return <div key={index} className={index===1?'select active':"active"} >{item.name}</div>
                 })}
            </div>
    </div>
   
  );
}

export default App;
