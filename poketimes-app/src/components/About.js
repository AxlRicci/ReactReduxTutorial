import React from 'react';
import Rainbow from '../hoc/Rainbow'; // import higher order component.

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Architecto enim, sit optio necessitatibus velit sunt! 
                Sapiente libero alias dolorum animi repudiandae delectus 
                dicta quisquam itaque sit deserunt! Molestias, a non.</p>
        </div>
    )
}

export default Rainbow(About); // using higher order component by wrapping About in Rainbow().