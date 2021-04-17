import { useState, useEffect } from "react";

function GetLibrary() {
  const [cards, setCard] = useState({});

  useEffect(() => {
    fetch("/library")
      .then((res) => res.json())
      .then((json) => setCard(json));
  }, []);
  return cards;
}

export default GetLibrary;
