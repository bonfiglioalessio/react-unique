import React from 'react';

const ErrorPage = () => {
    React.useEffect(() => {
        document.title = "Errore!";
      }, []);

    return(
        <h1>ErrorPage</h1>
    )
}

export {ErrorPage};