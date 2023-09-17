import React, { useEffect, useState } from 'react';
import BGVideo from '../assets/2 Min video.mp4';
import '../Styles/FirstPage.css'
import { Redirect } from 'react-router-dom'


function FirstPage() {
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRedirect(!redirect);
        }, 9000)
    }, [redirect]);


    return (
        <div className="main">
            {
                redirect === true ? (
                    <Redirect to='/welcome' />
                ) :
                    (
                        <video src={BGVideo} autoPlay muted />
                    )
            }
        </div>
    );
}

export default FirstPage;
