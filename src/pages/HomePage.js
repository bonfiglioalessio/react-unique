import React from 'react';
import {Hero} from '../components/Hero'
import {Gallery} from '../components/Gallery'
import {Mission} from '../components/Mission'
import {Testimonials} from '../components/Testimonials'
import {Rewards} from '../components/Rewards'

const HomePage = () => {
    React.useEffect(() => {
        console.log(document.title);
        document.title = "Home Page";
      }, []);

    return(
        <>
        <Hero/>
        <Gallery/>
        <Mission/>
        <Rewards/>
        <Testimonials/>
        </>
    )
}

export {HomePage};