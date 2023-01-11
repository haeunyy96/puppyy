import FilteredForm from "./FilteredForm";
import LilGallery from "./LilGallery";

// we are making the API call this way bc we want the pictures to appear when the page loads 

// 1. import the useState and useEffect Hooks from the react library
import {useState, useEffect} from "react";

// 2. how are we making this API call? axios, so import axios
import axios from 'axios';

const GalleryMom = () => {
    // 3. initialize state to hold the data - AKA pictures - returned from the unsplash API
    const [ puppyPics, setPuppyPics ] = useState([]);

    // D. initialize another piece of state to represent the photo orientation (which the user has chosen within the form)
    const [photoOrientation, setPhotoOrientation] = useState(null);

    // 4. Define a side effect which will run ONCE on component mount to make a request to the Unsplash API for some puppy pics
    useEffect(()=>{
        // once the async API request resolves successfully, we will save the returned data in state

        axios ({
            baseURL: 'https://api.unsplash.com/search/photos',
            params: {
                client_id: 'A-frEn_1PzO4524tWnXRHlLQJL4kawNO-uCndbNYHCY',
                query: 'puppies',
                per_page: 30,
                // D1. pass in the state variable so that this parameter's value is tied to state
                // orientation: null
                orientation: photoOrientation
            }
        }).then((apiData)=>{
            console.log(apiData);
            // once the async API request resolves successfully, we will save the returned data in state
            setPuppyPics(apiData.data.results);
        })


    },[photoOrientation]);

    // A. define an event handler which will be passed via props to the lilgallery component
    const selectPhotoOrientation = (event, chosenOrientation) => {
        // this function is called when the form is submitted, and the default dehaviour of the form is to "submit" the data and refresh the page
            // how do we tell this function NOT to refresh the page?
            // we need to call the preventDefault method which is available on the event object!
        event.preventDefault();
        // on form submit, log out the user's chosen form oreintation
        console.log(chosenOrientation);
        // 
        setPhotoOrientation(chosenOrientation);
    }

    return (
        <section>
            {/* B. pass the submit event handler down via props */}
            <FilteredForm handleSubmit={selectPhotoOrientation}/>

            {/* 5. pass down the photos in state to LilGallery as props */}
            <LilGallery puppyArray={puppyPics}/>
            {/* puppyArray is just a name */}
        </section>
    )
}

export default GalleryMom;