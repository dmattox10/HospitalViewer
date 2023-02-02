import axios from 'axios';
import { useState } from 'react'

export const useHospital = () => {
    
    const [name, setName] = useState('');
    const [location, setLoc] = useState('');
    const [type, setType] = useState('');
    const [npi, setNpi] = useState(0);

    const [hospitalList, setHospitalList] = useState([]);
    const [newNpi, setNewNpi] = useState(0);

    const addHospital = () => {
        axios.post('http://localhost:4000/create', {
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
        axios.get('http://localhost:4000/hospitals').then((response) => {
            setHospitalList(response.data);
        });
    };

    const editHospital = (id) => {
        axios.put(`http://localhost:4000/edit/${id}`, { npi: newNpi, id: id }).then(
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
        axios.delete(`http://localhost:4000/delete/${id}`).then((response) => {
            setHospitalList(
                hospitalList.filter((value) => {
                    return value.id !== id;
                })
            );
        });
    };

    return [ name, setName, location, setLoc, type, setType, npi, setNpi, hospitalList, setHospitalList, newNpi, setNewNpi, addHospital, getHospitals, editHospital ]

}