import { useEffect, useState } from "react";
import JokeCard from "../JokeCard/JokeCard";

export default function JokeList() {
    const [jokes, setjoke] = useState(null)

    return (
        <>
            {jokes ? <JokeCard joking={jokes.joke} tes={setjoke} /> : "not funny :( "}
        </>

    )

}