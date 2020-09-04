import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products || []
    }
  }
  
  // 2. Create a filter function in the ProductList that gets a query and filters products that include that query

  render() {
    return (
      <div>
        <h1>WSA Products</h1>
        <SearchBar />
        <ul className='list'>
          { /* TODO 1. Show products in the product list */ }
          <li class="list-item">Empty List =(</li>
        </ul>
      </div>
    )
  }
}

class Product extends React.Component {
  render() {
    return <li className="list-item">{this.props.name}</li>
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  // 3. Handle changes in the SearchBar and call the passed in filter function

  render() {
    return <input type="search" placeholder="Filter products" value={this.state.query} />
  }
}

export default ProductList;