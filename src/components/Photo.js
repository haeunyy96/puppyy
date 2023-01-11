// destructure the pic data passed down via props within the component func param

const Photo = ({getTheBits}) => {
    console.log(getTheBits);
    return (
        <li className="photo-container">
            <img src={getTheBits.urls.full} alt={getTheBits.alt_description} />
        </li>        
    )
}

export default Photo;