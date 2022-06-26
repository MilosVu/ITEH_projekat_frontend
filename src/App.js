import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import ListUsers from './components/ListUsers';
import ListMedicinesComponent from './components/Medicines/ListMedicinesComponent';
import CreateMedicineComponent from './components/Medicines/CreateMedicineComponent';
import ListPharmaceuticalCompanyComponent from './components/PharmaceutalCompany/ListPharmaceuticalCompanyComponent';
import DashboardComponent from './components/Login/DashboardComponent';
import CreatePharmaceuticalCompanyComponent from './components/PharmaceutalCompany/CreatePharmaceuticalCompanyComponent';
import ListDoctorsComponent from './components/Doctors/ListDoctorsComponent';
import ListExaminationsComponent from './components/Examinations/ListExaminationsComponent';
import DoctorDashboard from './components/Doctors/DoctorDashboard';
import CreateDoctorComponent from './components/Doctors/CreateDoctorComponent';
import NotFoundComponent from './components/NotFoundComponent';
import PatientDashboard from './components/Patient/PatientDashboard';
import ReceptionistDashboard from './components/Receptionist/ReceptionistDashboard';

function App() {

  const [token, setToken] = useState();

  return (
    <div>
      <Router>


      </Router>
    </div>
  );
}

export default App;
