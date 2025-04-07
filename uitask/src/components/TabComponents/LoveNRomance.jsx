import React from 'react'
import Card from 'react-bootstrap/Card';
function LoveNRomance() {
  return (
    <div className='con' style={{display:'flex',justifyContent:'space-around'}}>
    <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240607181017/exotic-elegance-roses-n-lilies-arrangement_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Love Wrapped in Roses</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 499 <s>₹ 699</s>
         </Card.Text>
       </Card.Body>
     </Card>
     
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20250120130052/personalised-valentine-special-speaker_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Personalised Valentine Special Speaker</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 799 <s>₹ 999</s>
         </Card.Text>
       </Card.Body>
     </Card>
 
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20231222121941/love-grown-bonsai-bliss_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Love Grown Bonsai Bliss</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 849 <s>₹ 1099</s>
         </Card.Text>
       </Card.Body>
     </Card>
 
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20250128222521/i-love-you-pinata-cake-1kg_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>I Love You Pinata Cake- 1Kg</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 1499 <s>₹ 1999</s>
         </Card.Text>
       </Card.Body>
     </Card>
   </div>
  )
}

export default LoveNRomance