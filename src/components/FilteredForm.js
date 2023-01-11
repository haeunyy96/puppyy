// HOW TO PASS user's picture orientation choice *UP* to the GalleryMom component ??? - pass a submit event handler function down to FilteredForm via props, and when the form is submitted, call that function which updates a value within the GalleryMom component
    // once info is passed up, use that value to make another call to the API to get pics filtered by the user's orientation

// 2. import useState Hook
import { useState } from "react";

// destructure the handleSubmit function from the props object
const FilteredForm = ({handleSubmit}) => {

    // 2A. initialize state to keep track of the user's dropdown selection
    const [userSelection, setUserSelection] = useState(null)
    // 2C. define a handleChange function
    const handleChange = (event) => {
        // 2D. update state to be equal to the user's chosen pic orientation option
        console.log(event.target.value);
        setUserSelection(event.target.value);
    }
    return (  
        // C. define a submit event listener and call the event handler which has been passed down via props
            // pass it the userSelection state as an argument
        <form action="" onSubmit={(event)=>{handleSubmit(event, userSelection)}}>
            <label htmlFor="filtration">Show me some photos of the following orientation:</label>
            {/* in order to associate a label with an input, use the for and id attributes */}
            {/* in order for React to know what selection the user has made within the dropdown, we need to tie the select to state*/}
            <select id="filtration" onChange={handleChange} value={userSelection}>
                {/* 1. listen for the 'change event within the dropdown */}
                    {/* 1a. pass in an onChange event handler */}

                {/* 2e. use the state for the dropdown to subsequently dictate the value of this element - CLOSE THE STATE LOOP! */}
                <option value="placeholder" disabled>Pick a photo orientation:</option>
                <option value="squarish">Square</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
            </select>
            <button>Give me photos!</button>
        </form>
    )
}

export default FilteredForm;