import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Birthday() {
  const navigate = useNavigate();
  return (<div className='con' style={{display:'flex',justifyContent:'space-around'}}>
   <Card  style={{ width: '20rem', display:'flex',flexDirection:'column', justifyContent:'space-around'}}>
      <Card.Img onClick={()=>navigate('/purchase')} variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240827183836/angelic-rose-bouquet-n-black-forest-birthday-bliss_1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Angelic Rose Bouquet & Black Forest Birthday Bliss</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 799 <s>₹ 1099</s>
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240419180752/butterscotch-crunch-cake-half-kg_1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Butterscotch Crunch Cake- Half Kg</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 649 <s>₹ 899</s>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20250114142904/birthday-special-syngonium-plant_5.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Birthday Special Syngonium Plant</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 499 <s>₹ 699</s>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20241025173402/birthday-celebration-mugs_2.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Birthday Celebration Mugs</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 299 <s>₹ 399</s>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Birthday