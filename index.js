import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';


 class HelloWorld extends React.Component{
	//render function return JSX
	constructor(){
		super();
		this.changeStatus=this.changeStatus.bind(this);
		this.updateTask=this.updateTask.bind(this);
		this.addTask=this.addTask.bind(this);
		this.deleteTask=this.deleteTask.bind(this);
		this.editTask=this.editTask.bind(this);
		this.state={
			
			tasks:[{
				name:"Buy milk",
				completed:false
			},
			{
				name:"Buy cheese",
				completed:false,
			},
			{
				name:"Buy Bread",
				completed:false
			}],
			currentTask:''
		}
	}
	
	addTask(evt){
		evt.preventDefault();
		let tasks=this.state.tasks;
		let currentTask=this.state.currentTask;
		tasks.push({
			name:currentTask,
			completed:false
		});
		
		this.setState({

			tasks:tasks
		})
		this.state.currentTask=''
	}

	editTask(index,newValue){
		console.log(index,newValue);
		var tasks=this.state.tasks;
		var task=tasks[index];
		task['name']=newValue;
		this.setState({
			tasks
		})
	}

	deleteTask(index){
		console.log(index);
		let tasks=this.state.tasks;
		tasks.splice(index,1);

		this.setState({
			tasks:tasks
		})

	}

	updateTask(newValue){
		this.setState({

			currentTask:newValue.target.value
		})
	}

	changeStatus(index){

		console.log(this.state.tasks[index]);
		var tasks=this.state.tasks;
		var task=tasks[index];
		task.completed=!task.completed;

		//TO permanently change state
		this.setState({

			tasks:tasks
		})

	}

 	render(){
 		return(
 				<div>
 					<TodoForm  currentTask={this.state.currentTask} updateTask={this.updateTask} addTask={this.addTask} />
 					<ul>
 						{
 							this.state.tasks.map((task,index) => {
 							return <TodoItem key={task.name} 
 							clickHandler={this.changeStatus} 
 							index={index}
 							details={task} 
 							editTask={this.editTask}
 							deleteTask={this.deleteTask}/>
 							})

 						}

 						
 					</ul>
 				</div>
 			)
 	};
 }





ReactDOM.render(<HelloWorld/>,document.getElementById('root'));