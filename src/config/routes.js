import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import FullPost from '../components/post/FullPost' 

export default (
	<Switch>
	<Route exact path ='/' component={Home} />
	<Route exact path ='/posts' component={Home} />
	<Route exact path ='/posts/:id' component={FullPost} /> 
	</Switch>
	)