import React, { useContext } from 'react'

import { HospitalContext } from '../contexts/HospitalContext'

const EditHospital = (props) => {

    const { value, toggle, modal }  = props // props.value props.toggle
    const { name, location, type, npi } = value // props.value.name, props.value.location

    const { editHospital } = useContext(HospitalContext)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        event.stopPropigation()

        let update = {
            name: name,
            location: location,
            type: type,
            npi: npi
        }

        editHospital(update)
        toggle()
    }

    return (

        <div isOpen={modal} toggle={toggle} className='alert alert-dissmissible alert-warning'>
            <div className='modal-header' toggle={toggle}>Edit {name}</div>
            <div className='modal-body'>
                <div className='form' onSubmit={() => onSubmitHandler()}>
                    <div classname='formgroup'>
                        <label for='name'>Name</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            value={name}
                        />
                        <label for='location'>Location</label>
                        <input
                            id='location'
                            name='location'
                            type='text'
                            value={location}
                        />
                        <label for='Type'>Type</label>
                        <input
                            id='Type'
                            name='Type'
                            type='text'
                            value={type}
                        />
                        <label for='npi'>NPI</label>
                        <input
                            id='npi'
                            name='npi'
                            type='text'
                            value={npi}
                        />
                    </div>
                </div>
            </div>                    
            <div className='modal-footer'>
                <button color="secondary" onClick={() => toggle}>Cancel</button>
            </div>
        </div>
    )
}

export default EditHospital