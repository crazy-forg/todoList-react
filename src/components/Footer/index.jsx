import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
	handleChangeAllTodo = (checked) => {
		this.props.changeAllTodo(checked)
	}
	handleClearAllDone = () => {
		this.props.clearAllDone()
	}
	render() {
		const { todos } = this.props
		// 已完成任务数量
		const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
		// 总数
		const total = todos.length
		return (
			<div className='todo-footer'>
				<label>
					<input
						type='checkbox'
						checked={doneCount === total && total !== 0}
						onChange={(e) => this.handleChangeAllTodo(e.target.checked)}
					/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className='btn btn-danger'>
					清除已完成任务
				</button>
			</div>
		)
	}
}
