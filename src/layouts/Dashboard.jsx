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
import ProductAdd from '../pages/ProductAdd';
import Login from '../pages/Login';
import Register from '../pages/Register';


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <Grid>
                <GridRow>
                   
                      {/* <Categories /> */}
                   

                    <GridColumn width={16}>

                        <Routes>
                            <Route exact path='/' element={< ProductList />}></Route>
                            
                            <Route exact path='/products' element={< ProductList />}></Route>
                            <Route exact path='/products/:id' element={< ProductDetail />}></Route>
                            <Route exact path='/cart' element={< CartDetail />}></Route>
                            <Route exact path='/product/add' element={< ProductAdd />}></Route>
                            <Route exact path='/login' element={< Login />}></Route>
                            <Route exact path='/register' element={< Register/>}></Route>

                        </Routes>




                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
