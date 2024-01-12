// create your App component here
import { useEffect, useState } from "react";

function App(){
    const [dogImage, setDogImage] = useState("Loading")
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => setDogImage(data.message))
    },
    []);
    console.log(typeof dogImage)
    return(
        <div>
            {dogImage === "Loading" ? 
                (<p>{dogImage}</p>) :
                (<img src={dogImage} alt="A Random Dog"></img>)}
            
        </div>
    )
}

export default App