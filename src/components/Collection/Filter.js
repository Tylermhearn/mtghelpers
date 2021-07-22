import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Filter = ({ cSelected, setCSelected }) => {

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }

  return (
    <>
      <ButtonGroup>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick('White')} active={cSelected.includes('White')}><img src="./images/whiteMana.png" width="25" height="25" alt="White Mana Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Blue")} active={cSelected.includes("Blue")}><img src="./images/blueMana.png" width="25" height="25" alt="Blue Mana Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Black")} active={cSelected.includes("Black")}><img src="./images/blackMana.png" width="25" height="25" alt="Black Mana Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Red")} active={cSelected.includes("Red")}><img src="./images/redMana.png" width="25" height="25" alt="Red Mana Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Green")} active={cSelected.includes("Green")}><img src="./images/greenMana.png" width="25" height="25" alt="Green Mana Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Colorless")} active={cSelected.includes("Colorless")}><img src="./images/colorlessMana.png" width="25" height="25" alt="Colorless Mana Symbol" /></Button>
      </ButtonGroup>
      <ButtonGroup className='pl-4'>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick('Artifact')} active={cSelected.includes('Artifact')}><img src="./images/artifact.png" width="25" height="25" alt="Artifact Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Enchantment")} active={cSelected.includes("Enchantment")}><img src="./images/enchantment.png" width="25" height="25" alt="Enchantment Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Creature")} active={cSelected.includes("Creature")}><img src="./images/creature.png" width="25" height="25" alt="Creature Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Instant")} active={cSelected.includes("Instant")}><img src="./images/instant.png" width="25" height="25" alt="Instant Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Sorcery")} active={cSelected.includes("Sorcery")}><img src="./images/sorcery.png" width="25" height="25" alt="Sorcery Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Planeswalker")} active={cSelected.includes("Planeswalker")}><img src="./images/planeswalker.png" width="25" height="25" alt="Planeswalker Symbol" /></Button>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Land")} active={cSelected.includes("Land")}><img src="./images/land.png" width="25" height="25" alt="Land Symbol" /></Button>
      </ButtonGroup>
      <ButtonGroup className='pl-4'>
        <Button className='shadow-none' onClick={() => onCheckboxBtnClick("Foil")} active={cSelected.includes("Foil")}>Foil</Button>
      </ButtonGroup>
    </>
  );
}

export default Filter