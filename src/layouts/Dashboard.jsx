import React from 'react'
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer } from 'react-toastify';


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>

                    <GridColumn width={12}>

                        <Routes>
                            <Route exact path='/' element={< ProductList />}></Route>
                            
                            <Route exact path='/products' element={< ProductList />}></Route>
                            <Route exact path='/products/:id' element={< ProductDetail />}></Route>
                            <Route exact path='/cart' element={< CartDetail />}></Route>

                        </Routes>




                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
