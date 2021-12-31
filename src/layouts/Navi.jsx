import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate();

    function handleSingIn(){
        setIsAuthenticated(true);
    }
    function handleSignOut() {
        setIsAuthenticated(false);
        navigate("/")
        
    }
    return (
        <div>
            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> 
                        : <SignedOut signIn={handleSingIn} />}




                    </Menu.Menu>
                </Container>

            </Menu>



        </div>
    )
}
