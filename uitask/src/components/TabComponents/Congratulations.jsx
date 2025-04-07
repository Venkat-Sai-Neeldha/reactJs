import React from 'react'
import Card from 'react-bootstrap/Card';
function Congratulations() {
  return (
    <div className='con' style={{display:'flex',justifyContent:'space-around'}}>
    <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240322143959/rose-celebration-bouquet_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Rose Celebration Bouquet</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 999 <s>₹ 1299</s>
         </Card.Text>
       </Card.Body>
     </Card>
     
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20200821164310/best-wishes-personalised-calendar_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Best Wishes Personalised Calendar</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 499 <s>₹ 699</s>
         </Card.Text>
       </Card.Body>
     </Card>
 
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20240619175915/congrat-wishes-jar-candle_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Congratulations Wishes Jar Candle</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 799 <s>₹ 999</s>
         </Card.Text>
       </Card.Body>
     </Card>
 
     <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" style={{height:'70%',width:'100%',borderRadius:'15px'}} src="https://m-i1.fnp.com/images/pr/l/v20241001131218/whimsical-chocolate-whispers_1.jpg" />
       <Card.Body>
         <Card.Title style={{fontSize:'16px',fontWeight:'900'}}>Whimsical Chocolate Whispers</Card.Title>
         <Card.Text style={{fontSize:'20px'}}>
         ₹ 799 <s>₹ 999</s>
         </Card.Text>
       </Card.Body>
     </Card>
   </div>
  )
}

export default Congratulations