import { useEffect, useState } from "react";
import JokeCard from "../JokeCard/JokeCard";

export default function JokeList() {
    const [jokes, setjoke] = useState(null)

    const kkk = 

    useEffect(() => {
        fetch("https://icanhazdadjoke.com", {
            headers: {
                'Accept': "application/json",
               
            }
        })
            .then(response => response.json())
            .then(data => setjoke(data))

    }, [])


    return (
        <>
            {jokes ? <JokeCard joking={jokes.joke} tes={setjoke} /> : "not funny :( "}
        </>

    )


}