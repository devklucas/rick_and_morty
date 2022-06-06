import React from 'react'
import { useCharacter } from '../../providers'
import {BoxCard,
    ImageChar,
    NameChar,
    BarStatus} from './styles'
const Card = () => {
    const {character} = useCharacter()

    return(
        character.map((char)=>{
            return (
            <BoxCard key={char.id} status={char.status}>
               <ImageChar src={char.image} alt={char.name}/>
               <NameChar>Name: {char.name}</NameChar>
               <BarStatus status={char.status}>Status: {char.status}</BarStatus>  
            </BoxCard>
            )
        })
    )
}
export default Card