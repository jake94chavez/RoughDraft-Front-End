import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MiniPost.css'


class MiniPost extends Component {
	render() {
		return(
			<div className="miniPost">
				<h3><Link className="plain-link" to={'/posts/'+ this.props._id}>{this.props.title}</Link></h3>
			</div>
			)
	}
}

export default MiniPost