import React from 'react'

export default function PersonalDetailsForm() {
    return (
        <div>
            <h3>Personal Details Form</h3>


            <div className="personaldataform">
                <form >
                    <div className="flex">
                        <div className='inputField'>
                            <label htmlFor="firstName">First Name</label>
                            <input className='formInput' type="text" id="firstName" name="firstName" value="" placeholder='' />
                        </div>
                        <div className='inputField'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className='formInput' type="text" id="lastName" name="lastName" value="" placeholder='' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className='inputField'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input className='formInput' type="text" id="phoneNumber" name="phoneNumber" value="" placeholder='' />
                        </div>
                        <div className='inputField'>
                        <label htmlFor="email">Email</label>
                        <input className='formInput' type="email" id="email" name="email" placeholder='Enter your email' />
                        </div>
                    </div>

                    <div className="inputField">
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input className='formInput' type="date" id="dateOfBirth" name="dateOfBirth" value="" placeholder='' />
                    </div>
                    <div className="inputField">
                        <label htmlFor="residentialAddress">Residential Address</label>
                        <textarea rows={3} className='formTextArea' id="residentialAddress" name="residentialAddress" value="" placeholder='' />
                    </div>

                   
                    <button type="submit" className="savesubmit">Save and Submit</button>
                </form>
            </div>

        </div>
    )
}
