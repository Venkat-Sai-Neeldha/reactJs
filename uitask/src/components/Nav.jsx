import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import Form from 'react-bootstrap/Form';
function Nav() {
  return (<>
   <Navbar className="bg-body-tertiary">
        <Container>
          <div className="abc">
            <Navbar.Brand >
            <img
              src="https://www.fnp.com/icons/fnp-gift.svg"
              width="70"
              height="60"
              className="d-inline-block align-top"
              alt="image logo"
              id='one'
            />
          </Navbar.Brand>
           <div id='con1'> 
            <img
              src="https://www.fnp.com/icons/question-location.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="image logo"
              id='two'
            />
           
            <span><b>where to deliver?</b><br />location unavailable </span>
            
            </div></div>

            <div id='ser'> 
            <div className="search-container">
      <div className="search-bar">
        <i className="fa fa-search"></i> 
        <input
          type="text"
          placeholder="Search gifts"
        />
      </div>
    </div></div>
           

    <div className="icons">
      <div id="img1">
        <img src="https://www.fnp.com/icons/same-day-desktop.svg" alt="aa" />
        <br />same day
      </div>
      <div id="img1">
        <img src="https://www.fnp.com/icons/currency-icons/inr.svg" alt="aa" />
        <br />  INR
      </div>
      <div id="img1">
        <img src="https://www.fnp.com/icons/corporate-gift.svg" alt="aa" />
        <br />corporate
      </div>
      <div id="img1">
        <img src="https://www.fnp.com/icons/same-day-desktop.svg" alt="aa" />
        <br />same day
      </div>
      <div id="img1">
        <img src="https://www.fnp.com/icons/user-square-desktop.svg" alt="aa" />
        <br />Hi Guest
      </div>
      <div id="img1">
        <img src="https://www.fnp.com/icons/more-square.svg" alt="aa" />
        <br />More
      </div>
    </div>
        </Container>
        
      </Navbar>
      <Container fluid className="category-container bg-light py-3 d-flex justify-content-center" id='nav2'>
      <div id='pqr'>
  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Birthday</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Occasions</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Anniversary</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Cakes</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Flowers</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Personalised</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Plants</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Chocolates</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Combos</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Lifestyle</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>Global</option>
    </select>
  </span>

  <span className="category-item mx-3 d-flex align-items-center">
    <select>
      <option>On Trend</option>
    </select>
  </span>
</div>
   </Container>
 
      
      
  
  </>
  )
}

export default Nav;