import React from 'react';
import { connect } from 'react-redux';
import {Navbar, NavbarBrand, Badge} from 'reactstrap';

const NavBar = ({totalCounters}) => {
    return ( 
        <div style={{direction: "ltr"}}>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/"> Shopping Cart </NavbarBrand>
                <Badge color="info" pill className="m-2">
                    {totalCounters}
                </Badge>
            </Navbar>
        </div>
     );
}
export default connect(state =>{
    return{
    totalCounters: state.filter(c => c.value > 0).length
    }
})(NavBar);
 