import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Todo from './Todo'
import App from '../App'
import PersonInfo from './PersonInfo'
import ApiComment from './ApiComment'
import '../index.css'

function Index() {
    return (
        <div style={{ width: '20vw', margin: '10em auto', border: 'solid 1px #22333B', fontWeight: '600', textAlign: 'center' }}>Home Index Here</div>
    )
}

function Home() {
    return (
        <Router>
            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#22333B', padding: '10px 8px' }}>
                <div>
                    <Link to='/' className='nav-txt-white'>Home</Link>
                </div>
                <div>
                    <Link to='/todo-list' className='nav-txt-white'>To Do</Link>
                </div>
                <div>
                    <Link to='/react-index' className='nav-txt-white'>Index</Link>
                </div>
                <div>
                    <Link to='/person-info' className='nav-txt-white'>Info</Link>
                </div>
                <div>
                    <Link to='/api-comment' className='nav-txt-white'>Comment</Link>
                </div>
            </div>
            <Route path='/' exact component={Index}></Route>
            <Route path='/todo-list' component={Todo}></Route>
            <Route path='/react-index' component={App}></Route>
            <Route path='/person-info' component={PersonInfo}></Route>
            <Route path='/api-comment' component={ApiComment}></Route>
        </Router>
    )
}

export default Home
