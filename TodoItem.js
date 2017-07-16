 import React from 'react';

 class TodoItem extends React.Component{
 	constructor(props){
 			super(props);
 			this.state={
 				isEditing:false
 			}
 			this.renderForm=this.renderForm.bind(this);
 			this.renderList=this.renderList.bind(this);
 			this.toggleState=this.toggleState.bind(this);
 			this.updateItem=this.updateItem.bind(this);
 		}

 		toggleState(){
 			const isEditing=this.state.isEditing;
 			this.setState({

 				isEditing:!isEditing
 			})
 		}

 		updateItem(evt){
 			evt.preventDefault();
 			console.log(this.input.value);

 			this.props.editTask(this.props.index,this.input.value);
 			this.toggleState();

 		}

 		renderForm(){
 			return(
 					<form onSubmit={this.updateItem}>
						<input type="text" ref={(value)=>{
							this.input=value

						}}defaultValue={this.props.details.name}/>
						<button type="submit" >Update Item</button>
					</form>

 				)
 		}

 		renderList(){
 			return(
 				<li onClick={ () => {
							this.props.clickHandler(this.props.index);
							//it is just showing the index of clicked <li> item

						}} className={this.props.details.completed?'completed':''}>
							{this.props.details.name}
							<button onClick={ (evt)=>{
								evt.stopPropagation();
								this.props.deleteTask(this.props.index)

							}}>Delete</button>
							<button onClick={ (evt)=>{
								evt.stopPropagation();
								this.toggleState()

							}}>Edit Item</button>
					</li>

 			)

 		}

		render(){
			const isEditing=this.state.isEditing;
			return(
				<section>
				{
					isEditing?this.renderForm():this.renderList()
				}
					

						
			</section>
			)


		}
}


/*
 To make it accessible outside 

 const TodoItem=(props) =>{

	return(
			<li onClick={ () => {
					props.clickHandler(props.index);
					//it is just showing the index of clicked <li> item

				}} className={props.details.completed?'completed':''}>
					{props.details.name}
					<button onClick={ (evt)=>{
						evt.stopPropagation();
						props.deleteTask(props.index)

					}}>Delete</button>
			</li> 			
		)
 }

*/
 export default TodoItem; 