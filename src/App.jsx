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
			{ id: 2, name: '睡觉', done: true },
			{ id: 3, name: '打豆豆', done: false }
		]
	}
	addTodo = (value) => {
		// 取出todos
		const { todos } = this.state
		// 添加
		const newTodos = [{ id: nanoid(), name: value, done: false }, ...todos]
		// 变更state
		this.setState({ todos: newTodos })
	}
	changeTodo = (id, done) => {
		// 取出todos
		const { todos } = this.state
		// 更改状态值
		const newTodos = todos.map((todo) => {
			if (todo.id === id) return { ...todo, done }
			else return { ...todo }
		})
		// 变更state
		this.setState({ todos: newTodos })
	}
	removeTodo = (id) => {
		// 取出todos
		const { todos } = this.state
		const newTodos = todos.filter((todo) => {
			return todo.id !== id
		})
		// 变更state
		this.setState({ todos: newTodos })
	}
	changeAllTodo = (done) => {
		// 取出todos
		const { todos } = this.state
		// 更改状态值
		const newTodos = todos.map((todo) => {
			return { ...todo, done }
		})
		// 变更state
		this.setState({ todos: newTodos })
	}
	clearAllDone = () => {
		// 取出todos
		const { todos } = this.state
		// 找出所有未完成的数据
		const newTodos = todos.filter((todo) => {
			return todo.done === false
		})
		// 变更state
		this.setState({ todos: newTodos })
	}
	render() {
		const { todos } = this.state
		return (
			<div className='todo-container'>
				<div className='todo-wrap'>
					<Header addTodo={this.addTodo} />
					<List todos={todos} changeTodo={this.changeTodo} removeTodo={this.removeTodo} />
					<Footer
						todos={todos}
						changeAllTodo={this.changeAllTodo}
						clearAllDone={this.clearAllDone}
					/>
				</div>
			</div>
		)
	}
}
