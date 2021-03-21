import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
	// 用一个状态来控制鼠标移入移出时的样式
	state = {
		mouseOver: false
	}
	handleChangeTodoDone = (id, done) => {
		this.props.changeTodo(id, done)
	}
	handleRemoveTodo = (id) => {
		this.props.removeTodo(id)
	}
	// 鼠标移出
	mouseLeave = () => {
		this.setState({ mouseOver: false })
	}
	// 鼠标移入
	mouseEnter = () => {
		this.setState({ mouseOver: true })
	}
	render() {
		const { mouseOver } = this.state
		const { id, name, done } = this.props
		return (
			<li
				style={{ backgroundColor: mouseOver ? '#ddd' : '#fff' }}
				onMouseLeave={this.mouseLeave}
				onMouseEnter={this.mouseEnter}
			>
				<label>
					<input
						type='checkbox'
						checked={done}
						// 这里传递id 以及事件对象的选中值
						onChange={(e) => this.handleChangeTodoDone(id, e.target.checked)}
					/>
					<span>{name}</span>
				</label>
				<button
					onClick={() => this.handleRemoveTodo(id)}
					className='btn btn-danger'
					style={{ display: mouseOver ? 'block' : 'none' }}
				>
					删除
				</button>
			</li>
		)
	}
}
