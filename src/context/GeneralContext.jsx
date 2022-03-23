import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const RecipiesContext = createContext([])
export const GeneralProvider = ({ children }) => {
    const [allRecipies, setAllRecipies] = useState([])
    const [recipeToSearch, setRecipeToSearch] = useState("cakes")
    const CallToAPI = async () => {
        console.log("im calling myAPI")
        const req = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=59869edb&app_key=%20f6a796bac8f4f6622eeab857baeb8cf8`)
        console.log(req)
        setAllRecipies(req.data.hits)
    }
    useEffect(() => {
        CallToAPI()

    }, [recipeToSearch])
    const data = {
        allRecipies: allRecipies,
        recipeToSearch: recipeToSearch,
        setRecipeToSearch: setRecipeToSearch
    }

    return (
        <RecipiesContext.Provider value={data}>
            {children}
        </RecipiesContext.Provider>
    )
}

