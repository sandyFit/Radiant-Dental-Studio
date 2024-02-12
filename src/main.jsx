import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
// import Login from './pages/login/Login.jsx'
//import SignUp from './pages/login/SignUp.jsx'
import NewPatientAppointment from './pages/booking/NewPatientAppointment.jsx'
import ExistingPatientAppointment from './pages/booking/ExistingPatientAppointment.jsx'
import EmergencyAppointment from './pages/booking/EmergencyAppointment.jsx'
import BookAppointment from './pages/booking/BookAppointment.jsx'
import OnlineBooking from './pages/booking/OnlineBooking.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />					
				</Route>

				<Route path='/book' element={<OnlineBooking/>} />
				<Route path='/new-patient-appointment' element={<NewPatientAppointment/>} />
				<Route path='/existing-patient-appointment' element={<ExistingPatientAppointment/>} />
				<Route path='/emergency-appointment' element={<EmergencyAppointment/>} />
				<Route path='/book-appointment' element={<BookAppointment/>} />
			</Routes>
		</Router>
	</React.StrictMode>
)
