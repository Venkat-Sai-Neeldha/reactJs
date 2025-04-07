import React from 'react'
import Card from 'react-bootstrap/Card';
function Thankyou() {
  return (
    <div className='con' style={{display:'flex',justifyContent:'space-around'}}>
    <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240607181017/exotic-elegance-roses-n-lilies-arrangement_3.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Exotic Elegance Roses N Lilies Arrangement</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 1849 <s>₹ 2099</s>
         </Card.Text>
       </Card.Body>
     </Card>
     
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20210712181835/jade-plant-in-gold-tone-metal-pot_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Jade Plant In Gold Tone Metal Pot</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 249 <s>₹ 399</s>
         </Card.Text>
       </Card.Body>
     </Card>
 
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240429172851/golden-glow-eggless-butterscotch-cake-half-kg_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Golden Glow Eggless Butterscotch Cake- Half Kg</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 649 <s>₹ 899</s>
         </Card.Text>
       </Card.Body>
     </Card>
 
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240725124803/thank-you-tribute-frame_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Thank You Tribute Frame</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 399  <s>₹ 499</s>
         </Card.Text>
       </Card.Body>
     </Card>
   </div>
  )
}

export default Thankyou