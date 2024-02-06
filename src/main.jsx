import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					
					
				</Route>

				<Route path='/login' element={<Login/>} />
			</Routes>
		</Router>
	</React.StrictMode>
)
