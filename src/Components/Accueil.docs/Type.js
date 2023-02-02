import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developpeur Fullstack",
                    "Ingénieur Textile & Fibres",
                    "Passioné de nouvelles technologies",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
            }}
        />
    );
}

export default Type;