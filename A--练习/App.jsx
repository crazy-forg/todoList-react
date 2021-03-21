import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {
	state = {
		todos: [
			{ id: 1, name: '吃饭', done: false },
			{ id: 2, name: '睡觉', done: false },
			{ id: 3, name: '打豆豆', done: true },
			{ id: 4, name: '逛街', done: true }
		]
	}
	addTodo = (value) => {
		const { todos } = this.state
		const newTodos = [{ id: nanoid(), name: value, done: false }, ...todos]
		this.setState({ todos: newTodos })
	}
	updateTodo = (id, done) => {
		const { todos } = this.state
		const newTodos = todos.map((todo) => {
			if (todo.id === id) return { ...todo, done: done }
			else return todo
		})
		this.setState({ todos: newTodos })
	}
	deleteTodo = (id) => {
		const { todos } = this.state
		const newTodos = todos.filter((todo) => {
			return todo.id !== id
		})
		this.setState({ todos: newTodos })
	}
	checkAllTodo = (checked) => {
		const { todos } = this.state
		const newTodos = todos.map((todo) => {
			return { ...todo, done: checked }
		})
		this.setState({ todos: newTodos })
	}
	clearDone = () => {
		const { todos } = this.state
		const newTodos = todos.filter((todo) => {
			return todo.done === false
		})
		this.setState({ todos: newTodos })
	}
	render() {
		const { todos } = this.state
		return (
			<div className='todo-container'>
				<div className='todo-wrap'>
					<Header addTodo={this.addTodo} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone} />
				</div>
			</div>
		)
	}
}
