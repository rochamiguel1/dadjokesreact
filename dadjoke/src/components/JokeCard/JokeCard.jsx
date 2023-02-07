import { useEffect, useState } from "react"

export default function JokeCard({joking, tes}) {
  
    const dadjoke = () => {
    fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        }
    })
        .then(response => response.json())
        .then(data => tes(data))
    }
    return (
        <div className="funnyCards">
            <p>{joking}</p>
            <button onClick={dadjoke}>Siguiente</button>
        </div>
    )
}

