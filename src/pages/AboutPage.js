import React from 'react';
import {Team} from '../components/Team'
import {What} from '../components/What'



const AboutPage = () => {
    React.useEffect(() => {
        console.log(document.title)
        document.title = "About Page";
      }, []);

    return(
        <>
        <What/>
        <Team/>
        </>
    )
}

export {AboutPage};