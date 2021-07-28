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
            <div className="new-order-card">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label hidden>Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <label hidden>Order</label>
                        <input 
                            type="text"
                            name="order"
                            value={order}
                            placeholder="Order"
                            onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}
