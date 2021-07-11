import React from "react";
import { useSelector } from "react-redux";
import library from "../../selectors/library";
import { Table, Col, Button, Row } from 'reactstrap'

// const MapCardImages = ({ imgUri }) => <img src={imgUri} alt="Logo" />

const MapCardImages = ({ imgUri }) =>
    <tr>
        <td><img src={imgUri} alt="Logo" /></td>
    </tr>

const CardTable = () => {
    const cards = useSelector(library)
    return (
        <div className='manifest'>
            <Table className='mb-0'>
                <thead>
                    <tr>
                        <th>Card</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(card => <MapCardImages {...card} key={card.id} />)}
                </tbody>
            </Table>
        </div>
    )
    // const cards = useSelector(library)

    // return (
    //     <div>{cards.map(card => <MapCardImages {...card} />)}</div>
    // )
}

export default CardTable
