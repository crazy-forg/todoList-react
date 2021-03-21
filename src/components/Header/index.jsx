import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
	// 新增待办事项
	addTodo = (keyCode, value) => {
		//当回车键按下且传值不为空时
		if (keyCode === 13 && value) {
			this.props.addTodo(value)
		}
	}
	render() {
		return (
			<div className='todo-header'>
				<input
					type='text'
					onKeyUp={(e) => this.addTodo(e.keyCode, e.target.value)}
					placeholder='请输入你的任务名称，按回车键确认'
				/>
			</div>
		)
	}
}
