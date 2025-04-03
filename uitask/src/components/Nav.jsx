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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search</Form.Label>
        <Form.Control className='searchbar' type="text" placeholder="Sending goodluck plants and more" />
      </Form.Group></div>
           

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
        <span className="category-item mx-3 d-flex align-items-center">Birthday<img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Occasions <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Anniversary <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Cakes <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Flowers <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Personalised <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Plants <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Chocolates <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Combos <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Lifestyle <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">Global <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
        <span className="category-item mx-3 d-flex align-items-center">On Trend <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
      </Container>
 
      
      
  
  </>
  )
}

export default Nav;