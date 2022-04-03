import {Button, makeStyles,Table,TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import { categories } from '../../constants/data';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    create:{
        margin: 10,
        padding: '8px',
        width: "90%",
        

    },
    table:{
        border: '1px solid rgba(224,224,224,1)',
        
    },
    link:{
        textDecoration: 'none',
        color: 'inherit',
    }
});

const Categories = ()=>{
    const classes = useStyle();
    return(
        <>
        <Link className={classes.link} to='/create'>
        <Button  className={classes.create} variant="contained" color='primary'>Create Blog</Button>
        </Link>

        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                <TableCell style={{color: 'black'}}>
                    <Link to={'/'} className={classes.link}>
                    All Categories
                    </Link>
                    </TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category =>(
                        <TableRow>
                            <TableCell style={{color: 'black'}}>
                                <Link to={`/?category=${category}`} className={classes.link}>
                                {category}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}

export default Categories;