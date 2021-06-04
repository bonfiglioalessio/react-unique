import React from 'react';


const BlogPage = () => {
    React.useEffect(() => {
        console.log(document.title)
        document.title = "Blog Page";
      }, []);

    return(
        <h1>Blog Page</h1>
    )
}

export {BlogPage};