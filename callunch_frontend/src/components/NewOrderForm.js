import React, { Component } from 'react'

export default class NewOrderForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newOrder: {
                'name': '',
                'order': '',
                completed: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        let {name, value} = e.target;
        if (e.target.type === "checkbox"){
            value = e.target.checked;
        }

        const newOrder = {...this.state.newOrder, [name]: value};
        this.setState({newOrder});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.newOrder);
        
    }
    render() {
        const {name, order, completed} = this.state.newOrder;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}/>
                    <label>Order:</label>
                    <input 
                        type="text"
                        name="order"
                        value={order}
                        onChange={this.handleChange}/>
                    <label>Completed</label>
                    <input 
                        type="checkbox"
                        name="completed"
                        value={completed}
                        onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
                
            </div>
        )
    }
}
