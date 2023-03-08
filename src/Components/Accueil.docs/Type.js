import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developpeur Full-stack",
                    "Ingénieur spécialisé Textile & Fibres",
                    "Passionné de nouvelles technologies",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
            }}
        />
    );
}

export default Type;