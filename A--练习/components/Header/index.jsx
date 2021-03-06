import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}
	handleKeyUp = (e) => {
		const { keyCode, target } = e

		if (keyCode === 13 && target.value !== '') {
			this.props.addTodo(target.value)
			target.value = ''
		}
	}
	render() {
		return (
			<div className='todo-header'>
				<input
					type='text'
					placeholder='请输入你的任务名称，按回车键确认'
					onKeyUp={this.handleKeyUp}
				/>
			</div>
		)
	}
}
