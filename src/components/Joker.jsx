import { useState,useEffect } from "react";
import './Joker.css';


export default function Joker(){
    let [joke,setjoke] = useState({});

    const URL = "https://hindi-jokes-api.onrender.com/jokes?api_key=5d848605bb3fa630e461387e80c0";

    const getNewJoke = async() => {
       let response = await fetch(URL);
       const JsonResponse = await response.json();
        console.log(JsonResponse);
        setjoke({jokeContent: JsonResponse.jokeContent});
    };

     useEffect(() => {
        async function getfirstJoke(){
            let response = await fetch(URL);
       const JsonResponse = await response.json();
      
        setjoke({jokeContent: JsonResponse.jokeContent});
     }
     getfirstJoke();
    },[]);

    return(
        <>
        <div>
            <h3 className="heading">Laugh Factory</h3>
            <div className="joke"><h2>{joke.jokeContent}</h2></div>
            <div className="button">
            <button onClick={getNewJoke} className="getJoke">Get New Joke</button>
            </div>
   
        </div>
           <div className="copyright"> 
           <p >Copyright 2024: Designed by Ankush Kumar</p>
           </div>
        </>
                  
    )

}