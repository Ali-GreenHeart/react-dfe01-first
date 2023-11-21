import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';


export default function CategoryMenu({ categories, setCatId, catId }) {
    return (
        <Paper>
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
                            <MenuItem
                                onClick={() => setCatId(i)}
                                key={i}
                                sx={{
                                    gap: 1.4, flexDirection: 'column', alignItems: 'flex-start'
                                }}
                            >
                                <Typography sx={{

                                    textWrap: 'wrap'
                                }} color={catId === i ? 'blue' : 'unset'} fontWeight={catId === i ? 600 : 'unset'}>{txt}</Typography>
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
        </Paper >
    );
}
