import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import SearchBar from './SearchBar';

const Nav = styled.nav`
  background-color: #828282;
  color: white;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

//   .search-bar {
//     padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="search-bar">
        {/* <SearchBar /> */}

        {/* Route from K */}
        <Header/>
<Switch>
<Route exact path='/' component={Home}></Route>
<Route path='/Ingredients' component={IngredientsBtn}></Route>
<Route path='/Recipe' component={RecipesBtn}></Route>
<Route path='/Contact' component={Contact}></Route>
</Switch>




      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
