import {useState} from 'react'
import {Drawer,List,ListItem,ListItemText, Button} from '@mui/material'
import {Link} from 'react-router-dom'
function DrawerMenu(){
    const [drawerOpen,setDrawerOpen] = useState(false)
    return(<>
    <Drawer open={drawerOpen} onClose={()=>setDrawerOpen(false)} anchor="left">
        <List>
            <ListItem>
                <ListItemText>
                    <Link to="/">Home</Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    this is my menu
                </ListItemText>
            </ListItem>
        </List>
    </Drawer>
    <Button onClick={()=>setDrawerOpen(!drawerOpen)}>Show Menu</Button>
    </>
    )
}
export default DrawerMenu