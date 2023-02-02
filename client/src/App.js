import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import Hospital from './components/Hospital';
import { HospitalContext } from './contexts/HospitalContext';

function App() {

    const [name, setName, location, setLoc, type, setType, npi, setNpi, hospitalList, setHospitalList, newNpi, setNewNpi, addHospital, getHospitals ] = useHospital()

    return (
        <div className='App'>
            <HospitalContext.Provider value={{ name, setName, location, setLoc, type, setType, npi, setNpi, hospitalList, setHospitalList, newNpi, setNewNpi, addHospital, getHospitals  }}>
            <HospitalForm />
            </HospitalContext.Provider>
        </div>
    );
}

export default App;
