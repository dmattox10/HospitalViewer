import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
    const [name, setName] = useState('');
    const [location, setLoc] = useState('');
    const [type, setType] = useState('');
    const [npi, setNpi] = useState(0);

    const [hospitalList, setHospitalList] = useState([]);
    const [newNpi, setNewNpi] = useState(0);

    const addHospital = () => {
        Axios.post('http://localhost:4000/create', {
            name: name,
            location: location,
            type: type,
            npi: npi,
        }).then(() => {
            setHospitalList([
                ...hospitalList,
                {
                    name: name,
                    location: location,
                    type: type,
                    npi: npi,
                },
            ]);
        });
    };

    const getHospitals = () => {
        Axios.get('http://localhost:4000/hospitals').then((response) => {
            setHospitalList(response.data);
        });
    };

    const updateHospitalNpi = (id) => {
        Axios.put('http://localhost:4000/edit', { npi: newNpi, id: id }).then(
            (response) => {
                setHospitalList(
                    hospitalList.map((value) => {
                        return value.id === id
                            ? {
                                  id: value.id,
                                  name: value.name,
                                  location: value.location,
                                  type: value.type,
                                  npi: newNpi,
                              }
                            : value;
                    })
                );
            }
        );
    };

    const deleteHospital = (id) => {
        Axios.delete(`http://localhost:4000/delete/${id}`).then((response) => {
            setHospitalList(
                hospitalList.filter((value) => {
                    return value.id !== id;
                })
            );
        });
    };

    return (
        <div className='App'>
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
                            <div className='hospital-list' key={value.id}>
                                <div>
                                    <h3>Name: {value.name}</h3>
                                    <h3>Location: {value.location}</h3>
                                    <h3>Type: {value.type}</h3>
                                    <h3>NPI: {value.npi}</h3>
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        placeholder='xxxxxxxxxx'
                                        onChange={(event) => {
                                            setNewNpi(event.target.value);
                                        }}
                                    ></input>
                                    <button
                                        onClick={() => {
                                            updateHospitalNpi(value.id);
                                        }}
                                    >
                                        Update
                                    </button>
                                    <br />
                                    <button
                                        onClick={() => {
                                            deleteHospital(value.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
