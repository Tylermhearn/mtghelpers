import React from 'react';
import { useSelector } from "react-redux";
import library from "../../selectors/library";
import Pagination from './Pagination';
import Filter from './Filter';

const cardSort = (a, b) => {
    if (a.extras === '' && b.extras === '') {
        return (b.prices.usd - a.prices.usd)
    }
    else if (a.extras === 'foil' && b.extras === '') {
        return (b.prices.usd - a.prices.usd_foil)
    }
    else if (a.extras === '' && b.extras === 'foil') {
        return (b.prices.usd_foil - a.prices.usd)
    }
    else {
        return (b.prices.usd_foil - a.prices.usd_foil)
    }
}

const cardFilter = (card) => {
    return (
        card.color_identity.includes('B') || card.color_identity.includes('G') && !card.color_identity.includes('U') && !card.color_identity.includes('R') && !card.color_identity.includes('W')
    )
}

const MapCardImages = ({ card }) =>
    <img src={card.imgUri} alt="Logo" className='photo' />

const CardTable = () => {
    const cards = useSelector(library)
    const temp = cards.filter(cardFilter).sort(cardSort)
    return (
        <div className="container mb-5">
            <Filter></Filter>
            <Pagination
                RenderComponent={MapCardImages}
                data={temp}
                title="Cards"
            />
        </div>
    )
}

export default CardTable