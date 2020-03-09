import React from 'react';

const Rainbow = (WrappedComponent) => { // Wrapped Component is the component that this is being used on.
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    let className = randomColor + '-text';

    return (props) => { // Return the component and optionally add props to it
        return (
            <div className={className}>
                <WrappedComponent {...props} /> {/* return component with added props */}
            </div>
        );
    }
};

export default Rainbow;