import React from 'react'
// import { FontAwesomeIcon } from ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Newsletter() {
    return (
        <div>
            <h3>Newsletter</h3>
            <h2>  Stay up-to-date with the latest industry trends</h2>

            <h5>Subscribe to get the top-notch practical tips for mastering your website.</h5>

            <div className="flex">
                <div className='m-auto'>
                    <div className="flex">
                        <input className='formInputNewsletter' type="email" name="email" placeholder='your email' />
                        <button type="submit" className="iconcont"> <FontAwesomeIcon icon={faEnvelope}  style={{ color: '#fff' }}/>Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="" style={{ maxWidth: "34em", margin: "10px auto" }}>

                    <input type="checkbox" className='' />
                    <label htmlFor="checkbox">*By entering your email you agree to receive the Hostinger newsletter. You can unsubscribe at any time. See our privacy policy.
                        Sign me up</label>
                </div>
            </div>




        </div>
    )
}
