import { useContext } from 'react'

import { HospitalContext } from '../contexts/HospitalContext';

import  EditHospital from './EditHospital';

// The next place to expand is to add form validation and feedback with Formik, Yup

export const Hospital = (props) => {

    const { value, key } = props
    const { setNewNpi, updateHospitalNpi, deleteHospital } = useContext(HospitalContext)

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

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
                {/* <button
                    onClick={() => {
                        updateHospitalNpi(value.id);
                    }}
                >
                    Update
                </button> */}
                <button onClick={() => {toggle()}}>Edit</button>
                <br />
                <button
                    onClick={() => {
                        deleteHospital(value.id);
                    }}
                >
                    Delete
                </button>
                <Modal value={ value } toggle={ toggle }/>
            </div>
        </div>
    );
}

export default Hospital