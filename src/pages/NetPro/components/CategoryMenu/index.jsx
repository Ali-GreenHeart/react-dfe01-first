import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

const categories = [
    "Uninterruptible Power Supplies (UPS)",
    "DC Power Systems",
    "Power Distribution",
    "Industrial AC and DC Systems",
    "Static Transfer Switches",
    "Power Control and Monitoring",
]

export default function CategoryMenu() {
    return (
        <Paper sx={{ margin: 2 }}>
            <MenuList
                subheader={
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: '#435072',
                            p: 3,
                            color: 'white',
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                    >
                        Category
                    </Paper>
                }
            >
                {
                    categories.map((txt, i) => {
                        return (
                            <MenuItem key={i} sx={{ gap: 1.4, flexDirection: 'column', alignItems: 'flex-start' }}>
                                <ListItemText>{txt}</ListItemText>
                                {
                                    i === categories.length - 1
                                        ?
                                        null :
                                        <Divider sx={{ alignSelf: 'stretch' }} variant='fullWidth' />
                                }
                            </MenuItem>
                        )
                    })
                }

            </MenuList>
        </Paper>
    );
}
