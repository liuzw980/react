import './App.css';
import One from './commens/one'
import First from './commens/First'
import Student from './commens/Student'
import Shop from './commens/Shop'
function App() {
    let name="有撒好的"
    let name1="有撒好的ghghghghghghhg"
    let arr= [
        { id: 1, name: "张三", paice: 2, num: 1 },   
        { id: 2, name: "李四", paice: 2, num: 2 },   
        { id: 3, name: "王二", paice: 2, num: 1 },   
        { id: 4, name: "麻子", paice: 2, num: 1 }
    ]
    return (     
      <div className="App">
           <One name={name} aa='aa'></One>
           <Student name={name1} aa="aa"></Student>
           <Shop arr={arr}></Shop>
           <First></First>
      </div>
    );
  }
  
  export default App;
  
