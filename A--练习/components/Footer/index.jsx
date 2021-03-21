import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
	checkedAll = (e) => {
		this.props.checkAllTodo(e.target.checked)
	}
	clearDone = () => {
		this.props.clearDone()
	}
	
	render() {
		const { todos } = this.props

		const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
		const total = todos.length

		return (
			<div className='todo-footer'>
				<label>
					<input
						type='checkbox'
						checked={doneCount === total && total !== 0}
						onChange={this.checkedAll}
					/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button className='btn btn-danger' onClick={this.clearDone}>
					清除已完成任务
				</button>
			</div>
		)
	}
}
