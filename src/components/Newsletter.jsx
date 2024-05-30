import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';

export default function Newsletter() {

    const formik = useFormik({
        initialValues: {
            emailForNewsletter: '',
            acceptPrivacyPolicy: true
        },
        validate: values => {
            const errors = {};
            if (!values.acceptPrivacyPolicy) {
                errors.acceptPrivacyPolicy = 'You need to agree to to privacy policy to receive newsletters'
            }
            if (!values.emailForNewsletter) {
                errors.emailForNewsletter = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailForNewsletter)) {
                errors.emailForNewsletter = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <div>
            <h3>Newsletter</h3>
            <h2>  Stay up-to-date with the latest industry trends</h2>
            <h5>Subscribe to get the top-notch practical tips for mastering your website.</h5>
            <div className="flex">
                <div className='m-auto'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex">
                            <input className='formInputNewsletter' id="emailfornewsletter" type="email" name="emailForNewsletter" placeholder='your email' value={formik.values.emailForNewsletter} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <button className="iconcont"> <FontAwesomeIcon icon={faEnvelope} style={{ color: '#fff' }} />Subscribe</button>
                        </div>
                        {formik.touched.emailForNewsletter && formik.errors.emailForNewsletter ? <div className='error'>{formik.errors.emailForNewsletter}</div> : null}
                    </form>
                </div>
            </div>
            <div>
                <div className="" style={{ maxWidth: "34em", margin: "10px auto" }}>
                    <input type="checkbox" className='' name="acceptPrivacyPolicy" value={formik.values.acceptPrivacyPolicy} checked={formik.values.acceptPrivacyPolicy} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <label htmlFor="checkbox">*By entering your email you agree to receive the Hostinger newsletter. You can unsubscribe at any time. See our privacy policy.
                        Sign me up</label>
                    {formik.errors.acceptPrivacyPolicy ? <div className='error'>{formik.errors.acceptPrivacyPolicy}</div> : null}
                </div>
            </div>
        </div>
    )
}
