import { useContext } from 'react';

import { HospitalContext } from '../contexts/HospitalContext';
const HospitalForm = (props) => {

    const {setName, setLoc, setType, setNpi, hospitalList, addHospital, getHospitals}  = useContext(HospitalContext)

    return (

        <div className='info'>
                <label>Name:</label>
                <input
                    type='text'
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <label>Location:</label>
                <input
                    type='text'
                    onChange={(event) => {
                        setLoc(event.target.value);
                    }}
                />
                <label>Type:</label>
                <input
                    type='text'
                    onChange={(event) => {
                        setType(event.target.value);
                    }}
                />
                <label>National Provider Identifier (NPI):</label>
                <input
                    type='number'
                    onChange={(event) => {
                        setNpi(event.target.value);
                    }}
                />
                <button onClick={addHospital}>Add Hospital</button>
                <br />
                <div className='show-hospitals'>
                    <button onClick={getHospitals}>Show Hospitals</button>
                    {hospitalList.map((value, key) => {
                        return (
                            <Hospital value={value} key={key} />
                        )
                    })}
                </div>
            </div>
    )
}