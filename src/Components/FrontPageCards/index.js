import React from "react";
import "./FrontPageCards.css";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

import * as image1 from "../../assets/collectionimg.jpg";
const collecitonImgLink = "https://cdn-images-1.listennotes.com/podcasts/the-mtg-collection-builder-podcast-mtgcb-cU7yBv2ksjK-1cXYuoiNTl8.1400x1400.jpg";

const FrontPageCards = () => {
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
          <Button block>
            <Link to='/collection' className='link'>
              Go to collection
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FrontPageCards;
