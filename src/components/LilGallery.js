import Photo from "./Photo";

// destructure the pic data passed down via props within the component func param
const LilGallery = ({puppyArray}) => {

    console.log(puppyArray);
    return (
        <div>
            <h2>Here are your puppy pictures!</h2>
            <ul className="photos">
                {
                    // map through puppyArray and generate a Photo component for each object within that array
                        // we will pass the entire object to the Photo component via props

                    puppyArray.map((photoObject)=>{
                        return <Photo key={photoObject.id} getTheBits={photoObject} />
                    })
                }
            </ul>   

        </div>
    )
}

export default LilGallery;