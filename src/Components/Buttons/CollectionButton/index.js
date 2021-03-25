import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

function CollectionButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/collection");
  }

  return (
    <Button block type='button' onClick={handleClick}>
      Collection
    </Button>
  );
}

export default CollectionButton;
