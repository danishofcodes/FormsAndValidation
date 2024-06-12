import { faArrowCircleRight, faCheckCircle, faCircleExclamation, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import React, { useState } from 'react'
import SelectCountry from './SelectCountry';


export default function PersonalDetailsForm() {
    const [confirmResetModal, setConfirmResetModal] = useState(false);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    // phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    const SignupSchema = Yup.object().shape({

        firstName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Firstname is Required'),

        lastName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Lastname is Required'),

        email: Yup.string().email('Invalid email').required('Email is Required'),

        phoneNumber: Yup.string()
            .max(15, 'Too Long, Are You Sure Its Correct?')
            .matches(phoneRegExp, 'Phone number is not valid'),

        residentialAddress: Yup.string()
            .min(10, 'Too Short! suggestion, Include Landmarks for better location pinpointing')
            .max(120, 'Too Long!')
            .required('Address is Required'),

        dateOfBirth: Yup.string()
            .required('Date Of Birth is Required'),

        countryname: Yup.string().required('Country Name is Required'),

    });


    const { resetForm, ...formik } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            countryname: '',
            phoneNumber: '',
            email: '',
            dateOfBirth: '1998-12-31',
            residentialAddress: ''
        },
        validationSchema: SignupSchema,

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    function handleReset() {
        resetForm();
        setConfirmResetModal(false)
    }

    function confirmResetAction() {
        setConfirmResetModal(true);
    }

    function goback() {
        setConfirmResetModal(false)
    }
    return (
        <>
            <div>
                <h3>Personal Details Form</h3>
                <div className="personaldataform">
                    <form onSubmit={formik.handleSubmit}>

                        <div className='inputField'>
                            <label htmlFor="firstName">First Name</label>
                            <input className='formInput' type="text" id="firstName" name="firstName" value={formik.values.firstName} placeholder='Your first name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.firstName && formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}
                        </div>
                        <div className='inputField'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className='formInput' type="text" id="lastName" name="lastName" value={formik.values.lastName} placeholder='Your last name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.lastName && formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
                        </div>



                        <div class="inputField">
                            <label for="country">Country</label>
                            <SelectCountry selectorname="countryname" handleBlur={formik.handleBlur} handleChange={formik.handleChange} val={formik.values.countryname} />
                            {formik.touched.countryname && formik.errors.countryname ? <div className='error'>{formik.errors.countryname}</div> : null}
                        </div>
                        <div class="inputField">
                            <label for="dateOfBirth">Date Of Birth</label>
                            <input className='formInput' type="date" id="dateOfBirth" name="dateOfBirth" value={formik.values.dateOfBirth} placeholder='DOB' onChange={formik.handleChange} onBlur={formik.handleBlur}  min="1910-01-01" max="2018-12-31" />
                            
                            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <div className='error'>{formik.errors.dateOfBirth}</div> : null}
                        </div>



                        <div className='inputField'>
                            <label htmlFor="phoneNumber">Phone Number <span className='optional'>*(Optional)</span></label>
                            <input className='formInput' type='text' id="phoneNumber" name="phoneNumber" value={formik.values.phoneNumber} placeholder='10 digit phone number' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className='error'>{formik.errors.phoneNumber}</div> : null}
                        </div>
                        <div className='inputField'>
                            <label htmlFor="email">Email</label>
                            <input className='formInput' type="email" id="email" name="email" value={formik.values.email} placeholder='Enter your email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                        </div>

                        <div className="inputField">
                            <label htmlFor="residentialAddress">Residential Address</label>
                            <textarea rows={3} className='formTextArea' id="residentialAddress" name="residentialAddress" value={formik.values.residentialAddress} placeholder='Enter your address' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.residentialAddress && formik.errors.residentialAddress ? <div className='error'>{formik.errors.residentialAddress}</div> : null}

                        </div>

                        <button type="submit" className="savesubmit"><FontAwesomeIcon icon={faCheckCircle} /> Save and Submit</button>
                        <button type="button" className="reset" onClick={confirmResetAction}><FontAwesomeIcon icon={faRotateRight} className='reset-icon' /> Reset</button>
                    </form>
                </div>
            </div>
            {confirmResetModal &&
                <div className='backdrop'>
                    <div className='modal-confirm-action'>
                        <h5>The form will be <b>RESET</b>, all data will be lost, want to proceed? </h5>
                        <button type='button' className="actionred" onClick={handleReset}><FontAwesomeIcon icon={faCircleExclamation} /> Confirm Reset Form</button>
                        <br />
                        <button type='button' className="goback" onClick={goback}><FontAwesomeIcon icon={faArrowCircleRight} /> Go Back</button>
                    </div>
                </div>
            }
        </>
    )
}
