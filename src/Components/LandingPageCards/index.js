import React from "react";
import "./LandingPageCards.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import CollectionButton from "../Buttons/CollectionButton";

import * as image1 from "../../assets/collectionimg.jpg";
const collecitonImgLink = "https://cdn-images-1.listennotes.com/podcasts/the-mtg-collection-builder-podcast-mtgcb-cU7yBv2ksjK-1cXYuoiNTl8.1400x1400.jpg";

const LandingPageCards = () => {
  return (
    <div className='Card'>
      <Card inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
        <CardImg
          top
          width='100%'
          src={"https://cdn-images-1.listennotes.com/podcasts/the-mtg-collection-builder-podcast-mtgcb-cU7yBv2ksjK-1cXYuoiNTl8.1400x1400.jpg"}
        />
        <CardBody>
          <CardTitle tag='h1'>Collection</CardTitle>
          <CardText>View, Edit, Import, Export your collection here</CardText>
          <CollectionButton />
        </CardBody>
      </Card>
    </div>
  );
};

export default LandingPageCards;
