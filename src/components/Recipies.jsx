import { useContext } from 'react'
import { RecipiesContext } from '../context/GeneralContext'
import { Card, CardHeader, CardContext, Divider, Typography, Grid, Button, Box, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
function Recipies() {
    const styleHeader = {
        height: 50
    }
    const { allRecipies } = useContext(RecipiesContext)
    return (
        <>
            <h1>this are my recipies</h1>
            <Grid container spacing={2} style={styleHeader}>
                {
                    allRecipies.map((recipe) => (
                        <Grid item sx={6} md={3}>
                            <Card>
                                <CardHeader title={recipe.recipe.label} />
                                <Divider />
                                <CardContent>
                                    <CardMedia component="img" image={recipe.recipe.image} height="200" />
                                </CardContent>
                            </Card>
                            <Button><Link to={`/Recipe/${recipe.recipe.label}`}>See More</Link></Button>
                        </Grid>

                    ))
                }
            </Grid>

        </>

    )
}
export default Recipies