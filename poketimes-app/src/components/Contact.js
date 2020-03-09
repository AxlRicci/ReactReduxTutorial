import React from 'react';

const Contact = (props) => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Architecto enim, sit optio necessitatibus velit sunt! 
                Sapiente libero alias dolorum animi repudiandae delectus 
                dicta quisquam itaque sit deserunt! Molestias, a non.</p>
        </div>
    )
}

export default Contact;

//when router is used to direct to a component it automatically gets special additions to props (History, Location, Match objects)
// Each object has its own methods. push method is used above to redirect to about page after 2s.
