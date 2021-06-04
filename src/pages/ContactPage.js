import React from 'react';


const ContactPage = () => {
    React.useEffect(() => {
        console.log(document.title)
        document.title = "Contact Page";
      }, []);

    return(
        <h1>Contact Page</h1>
    )
}

export {ContactPage};