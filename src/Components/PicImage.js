import React from 'react';
import {Preeti} from '../images/preeti.png'
const PicImage = ()=>{
    console.log(Preeti);
    return (
        <div >
        <img className="rounded  img-fluid img-thumbnail" alt ="preetiimage" src={process.env.PUBLIC_URL + "/preeti.jpg"}></img>        
        </div>
    );
}
export default PicImage;
