import React from 'react';
import { connect } from "react-redux";
import {fetchCategories, fetchCategory} from '../../redux/actionCreators/searchCreator'
import Categories from '../components/Categories'


class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this)
} 
componentDidMount() {
  this.props.fetchCategories()
}
handleClick(id) {
  this.props.fetchCategory(id)
}

render() {
    return (
      <Categories
        categoriesP={this.props.categoriesP}
      />
    );
  }
}


const mapStateToProps = (state) => ({
  categoriesP: state.categories.categories,
  products: state.products.categoryProducts
});

const mapDispatchToProps = function(dispatch,ownProps){
  return {
    fetchCategories:()=>dispatch(fetchCategories()), 
    fetchCategory :()=> dispatch(fetchCategory()),
   
  }

}

export default connect(mapStateToProps, mapDispatchToProps )(CategoriesContainer);