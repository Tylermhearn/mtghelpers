import GetCard from "../actions/GetCard";

const initialState = [
  {
    _id: "Test",
    collector_number: "Land",
    extras: "code",
    language: "",
    name: "",
    oracle_id: "",
    quantity: "",
    scryfall_id: "",
    set_code: "",
    set_name: "",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case "GETCARD":
      return state;
    default:
      return state;
  }
}
