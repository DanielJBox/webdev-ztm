import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const imageMap = {
    "Luke Skywalker":
        "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg",
    "C-3PO":
        "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg",
    "R2-D2":
        "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg",
    "Darth Vader":
        "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",
    "Leia Organa":
        "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg",
    "Owen Lars":
        "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg",
    "Beru Whitesun lars":
        "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png",
    "R5-D4":
        "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg",
    "Biggs Darklighter":
        "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg",
    "Obi-Wan Kenobi":
        "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg",
};

function App() {
    const [people, setPeople] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [details, setDetails] = useState({});
    const [isClosing, setIsClosing] = useState(false);
    const cardRefs = useRef([]);
    const overlayRef = useRef(null);

    useEffect(() => {
        fetch("https://swapi.py4e.com/api/people/?page=1")
            .then((res) => res.json())
            .then((data) => setPeople(data.results));
    }, []);

    const fetchDetails = async (person, index) => {
        const fetchAll = async (urls) =>
            Promise.all(
                urls.map((url) => fetch(url).then((res) => res.json()))
            );
        const [homeworld, starships, vehicles, films, species] =
            await Promise.all([
                fetch(person.homeworld).then((res) => res.json()),
                fetchAll(person.starships),
                fetchAll(person.vehicles),
                fetchAll(person.films),
                fetchAll(person.species),
            ]);
        setDetails({ homeworld, starships, vehicles, films, species });
        setSelectedPerson(person);
        setSelectedIndex(index);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(event.target) &&
                !event.target.closest(".character-card")
            ) {
                setIsClosing(true);
                setTimeout(() => {
                    setSelectedPerson(null);
                    setSelectedIndex(null);
                    setIsClosing(false);
                }, 300); // match the animation duration
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [overlayRef]);

    return (
        <div className="app">
            <header className="header">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                    alt="Star Wars Logo"
                    className="logo"
                />
                <h1>Star Wars Characters</h1>
            </header>

            <main className="main">
                <div className="character-grid">
                    {people.map((person, index) => (
                        <div key={index} className="character-wrapper">
                            <div
                                ref={(el) => (cardRefs.current[index] = el)}
                                onClick={() => fetchDetails(person, index)}
                                className="character-card"
                            >
                                <img
                                    src={
                                        imageMap[person.name] ||
                                        "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                                    }
                                    alt={person.name}
                                    className="character-image"
                                />
                                <h3>{person.name}</h3>
                            </div>
                            {selectedIndex === index && selectedPerson && (
                                <div
                                    ref={overlayRef}
                                    className={`details-overlay-inline ${
                                        isClosing ? "closing" : "opening"
                                    }`}
                                >
                                    <div className="details-slideout">
                                        <p>
                                            <strong>Homeworld:</strong>{" "}
                                            {details.homeworld.name}
                                        </p>
                                        <p>
                                            <strong>Species:</strong>{" "}
                                            {details.species
                                                .map((s) => s.name)
                                                .join(", ") || "Human"}
                                        </p>
                                        <p>
                                            <strong>Starships:</strong>{" "}
                                            {details.starships
                                                .map((s) => s.name)
                                                .join(", ") || "None"}
                                        </p>
                                        <p>
                                            <strong>Vehicles:</strong>{" "}
                                            {details.vehicles
                                                .map((v) => v.name)
                                                .join(", ") || "None"}
                                        </p>
                                        <p>
                                            <strong>Films:</strong>{" "}
                                            {details.films
                                                .map((f) => f.title)
                                                .join(", ")}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2025 Star Wars Fan App</p>
            </footer>
        </div>
    );
}

export default App;
