import React, { useState } from 'react';
import { useSelector } from "react-redux";
import library from "../../selectors/library";
import Pagination from './Pagination';
import Filter from './Filter';

const defaultState = ['White', 'Blue', 'Black', 'Red', 'Green', 'Colorless', 'Artifact', 'Instant', 'Creature', 'Sorcery', 'Enchantment', 'Land', 'Planeswalker']

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

const newFilter = (cards, cSelected) => {
    if (cards === undefined || cards.length == 0) return ''
    let temp = cards
    let arr = []
    if (cSelected.includes('Foil')) {
        temp = temp.filter(card => card.extras.includes('foil'))
    }
    if (!cSelected.includes('White')) {
        temp = temp.filter(card => !card.color_identity.includes('W'))
    }
    if (!cSelected.includes('Blue')) {
        temp = temp.filter(card => !card.color_identity.includes('U'))
    }
    if (!cSelected.includes('Black')) {
        temp = temp.filter(card => !card.color_identity.includes('B'))
    }
    if (!cSelected.includes('Red')) {
        temp = temp.filter(card => !card.color_identity.includes('R'))
    }
    if (!cSelected.includes('Green')) {
        temp = temp.filter(card => !card.color_identity.includes('G'))
    }
    if (!cSelected.includes('Colorless')) {
        temp = temp.filter(card => card.color_identity.includes('W') || card.color_identity.includes('U') || card.color_identity.includes('B') || card.color_identity.includes('R') || card.color_identity.includes('G'))
    }
    for (let card of temp) {
        if (card.type_line.includes('Enchantment') && cSelected.includes('Enchantment')) {
            arr.push(card)
        }
        if (card.type_line.includes('Artifact') && cSelected.includes('Artifact')) {
            arr.push(card)
        }
        if (card.type_line.includes('Instant') && cSelected.includes('Instant')) {
            arr.push(card)
        }
        if (card.type_line.includes('Creature') && cSelected.includes('Creature')) {
            arr.push(card)
        }
        if (card.type_line.includes('Sorcery') && cSelected.includes('Sorcery')) {
            arr.push(card)
        }
        if (card.type_line.includes('Land') && cSelected.includes('Land')) {
            arr.push(card)
        }
        if (card.type_line.includes('Planeswalker') && cSelected.includes('Planeswalker')) {
            arr.push(card)
        }
    }
    return [...new Set(arr)] //remove duplicates
}

const MapCardImages = ({ card }) =>
    <img src={card.imgUri} alt="Logo" className='photo' />

const CardTable = () => {
    const cards = useSelector(library)
    const [cSelected, setCSelected] = useState(defaultState);
    const temp = newFilter(cards, cSelected).sort(cardSort)
    return (
        <div className="container mb-5">
            <Filter cSelected={cSelected} setCSelected={setCSelected} />
            <Pagination RenderComponent={MapCardImages} data={temp} title="Cards" />
        </div>
    )
}

export default CardTable