import React from 'react'
import Card from 'react-bootstrap/Card';
function Anniversary() {
  return (
    <div className='con' style={{display:'flex',justifyContent:'space-around'}}>
   <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20241003173602/blooming-together-always-lily-bouquet_1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Blooming Together Always Lily Bouquet</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 1299 <s>₹ 1599</s>
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20241010121744/personalised-hanging-memory-frame_1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Personalised Hanging Memory Frame</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 549 <s>₹ 699</s>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20231123153559/mugful-of-love-greens_1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Mugful of Love Greens</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 549 <s>₹ 699</s>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20231107183627/anniversary-roses-of-love_1.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Anniversary Roses of Love</Card.Title>
        <Card.Text style={{fontSize:'20px'}}>
        ₹ 1099 <s>₹ 1599</s>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Anniversary