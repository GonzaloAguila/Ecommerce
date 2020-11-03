import React from 'react';
import Navbar from '../components/Navbar';
import Cart from "../components/Cart"
import { connect } from "react-redux"

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
} 

//Lógica del Navbar y del carrito

render() {
    return (
      <div>
      <Navbar/>
      <Cart/>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {};
};

const mapDispatchToProps = function(dispatch){
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);