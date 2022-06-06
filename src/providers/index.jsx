import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
const CharacterContext = createContext()

export const CharacterProvider = ({children}) => {
    const [character, setCharacter] = useState([])
    const [currentPage, setCurrentPage] = useState(`https://rickandmortyapi.com/api/character/?page=1`)
    const [urlNext, setUrlNext] = useState('')
    const [urlPrev, setUrlPrev] = useState('')
    useEffect(()=>{ 
        axios(currentPage)
        .then((response)=> {
        setCharacter(response.data.results)
        setUrlNext(response.data.info.next)
        setUrlPrev(response.data.info.prev)
    }) 
    },[currentPage])

    const nextPage = () => urlNext !== null ? setCurrentPage(urlNext) : null
    const prevPage = () => urlPrev !== null ? setCurrentPage(urlPrev) : null
    return (
        <CharacterContext.Provider value={{character,nextPage, prevPage,urlNext,urlPrev}}>
            {children}
        </CharacterContext.Provider>
    )   
}
export const useCharacter = () => useContext(CharacterContext)
