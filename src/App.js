import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';
// 曲线括号中均是js的表达式
class App extends Component{
  constructor(){
    super();
    this.state = { //state就是javascript的object
      monsters: [
        // {
        //   name: 'Frankenstein',
        //   id: 'asc1'
        // },
        // {
        //   name: 'Dracula',
        //   id: 'asr2'
        // },
        // {
        //   name: 'Zombie',
        //   id: 'as1w'
        // }
      ],
      searchField: ''
    };
    //the below two lines of comment indicates how to create class method
    //这是解决 “this” is not defined的办法 *** for every new class method that we write we have to bind it. The Better way is to use the arrow function, it allows you to define "this" when whole thing is defined
    // this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response =>Response.json())
    .then(users => this.setState({monsters:users}))
  }
  //in this way, using the arrow function will solve the binding problem of "this not defined" 
  handleChange=(e) => {
    this.setState({searchField: e.target.value});
  }
  render() {
    //我们直接在render中实现过滤功能，最后return中直接返回filteredMonsters
    //this.state is the object that we want to actually pull properties from. 此处const变量的名字必须保持与原state中一致！
    const {monsters, searchField }=this.state;
    //the code above means the same thing as:
    //const mymonsters=this.state.monsters;
    //const mysearchField=this.state.seatchField;
    const filteredMonsters= monsters.filter(each_monster=>
      each_monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        {/* e代表synthetic event, 即用户在搜索栏中打字或者remove动作之类的 onchange represents all the changes happened in the search box*/}
        {/* <input type="search"
         placeholder="search monster" 
         onChange={e=>{this.setState({ searchField:e.target.value})}} /> */}
        {/* 传入monsters的时候，已经将其变为一个obj monsters={this.state.monsters} */}
        <SearchBox
          placeholder='search monsters'
         // handleChange={e=>{this.setState({ searchField:e.target.value})}}
          handleChange={this.handleChange}
         />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  // render(){
  //   return (
  //     <div className="App">
  //     <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>{this.state.string}</p>
  //          {/* an anonymous function using the arrow syntax to call the this.setState  */}
  //          {/* You are not allowed to modify the state without using the method "setState" */}
  //         <button onClick={()=>this.setState({string:'Hello shenxinyu'})}>ChangeText</button> 
  //       </header>
  //     </div>
  //   );
  // }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, my name is ppap
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
