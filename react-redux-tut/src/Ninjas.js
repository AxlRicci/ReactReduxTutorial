import React from 'react';

const Ninjas = ({ ninjas, deleteNinja }) => { // destructure witin the argument

        // const { ninjas } = props; // destructuring props into variables

        // const ninjaList = ninjas.map(ninja => { // when mapping return the JSX and then call the variable in the render return.
        //     if (ninja.age > 20){ // using if statement to determine which objects are returned.
        //         return (
        //             <div className="ninja" key={ninja.id}>
        //                 <div>Name: {ninja.name} </div>
        //                 <div>Age: {ninja.age} </div>
        //                 <div>Belt: {ninja.belt}</div>
        //             </div>
        //         )
        //     } else {
        //         return null;
        //     }
        // });

        const ninjaList = ninjas.map(ninja => { 
            return ninja.age > 20 ? (// use turnary operator instead of if statement to determine which items are returned.
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name} </div>
                    <div>Age: {ninja.age} </div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button> {/* use a anonymous function ( () => {function) ) to ensure it is not automatically called when page loads.*/}
                </div>
            ) : null;
        });
        
        return(
            <div className="ninja-list">
                { ninjaList } {/* use the variable here to display the return. can also use the ninjas.map function directly.. */}
            </div>
        )
}

export default Ninjas;