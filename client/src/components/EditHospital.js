import React, { useContext, useState } from 'react'


const EditHospital = (props) => {

    const { name, location, type, npi } = props

    return (

        <div className='modal' isOpen={modal} toggle={toggle} className='alert alert-dissmissible alert-warning'>
            <div className='modal-header' toggle={toggle}>Edit {name}</div>
            <div className='modal-body'>
                <div className='form' onSubmit={formik.handleSubmit}>
                    <div classname='formgroup'>
                        <label for='name'>Name</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            value=''
                        />
                        <label for='location'>Location</label>
                        <input
                            id='location'
                            name='location'
                            type='text'
                            value
                        />
                        <label for='Type'>Type</label>
                        <input
                            id='Type'
                            name='Type'
                            type='text'
                            value
                        />
                        <label for='npi'>NPI</label>
                        <input
                            id='npi'
                            name='npi'
                            type='text'
                            value
                        />
                    </div>
                </div>
            </div>                    
            <div className='modal-footer'>
                <button color="secondary" onClick={toggle}>Cancel</button>
            </div>
        </div>
    )
}

export default EditHospital