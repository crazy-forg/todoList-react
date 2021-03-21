import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
	render() {
		const { todos, changeTodo, removeTodo } = this.props
		return (
			<ul className='todo-main'>
				{todos.map((todo) => {
					return <Item {...todo} key={todo.id} changeTodo={changeTodo} removeTodo={removeTodo} />
				})}
			</ul>
		)
	}
}
