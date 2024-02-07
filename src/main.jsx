import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
// import Login from './pages/login/Login.jsx'
import SignUp from './pages/login/SignUp.jsx'
import BookOnline from './pages/boking/BookONline.jsx'
import NewPatientAppointment from './pages/boking/NewPatientAppointment.jsx'
import ExistingPatientAppointment from './pages/boking/ExistingPatientAppointment.jsx'
import EmergencyAppointment from './pages/boking/EmergencyAppointment.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />					
				</Route>

				<Route path='/book' element={<BookOnline/>} />
				<Route path='/new-patient-appointment' element={<NewPatientAppointment/>} />
				<Route path='/existing-patient-appointment' element={<ExistingPatientAppointment/>} />
				<Route path='/emergency-appointment' element={<EmergencyAppointment/>} />
				<Route path='/sign-up' element={<SignUp/>} />
			</Routes>
		</Router>
	</React.StrictMode>
)
