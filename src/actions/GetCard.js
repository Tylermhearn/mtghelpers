import { useState, useEffect } from "react";

function GetCard(name) {
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch("/card/" + name)
      .then((res) => res.json())
      .then((json) => setCard(json));
  }, []);
  return [card];
}

export default GetCard;
