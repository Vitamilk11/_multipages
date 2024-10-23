
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './carts.css';

function Carts({ carts, setCarts }) {
    return (
        <div className='carts-container'>
    <div className="carts-itemps-container">
    {carts.map((cart) => {
        return (
            <Card style={{ width: "18rem" }} key={cart.id}>
            <Card.Img variant="top" src={cart.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{cart.title}</Card.Title>
              <Card.Text><b>${cart.price.toFixed(2)}</b></Card.Text>
              

              <Button variant="outline-danger"onClick={() => {
                setCarts(carts.filter((c) =>  c.id !== cart.id))
              }}
              >Remove from Carts</Button>
            </Card.Body>
          </Card>
        )
      })}
      </div>
      <h4>items : {carts.length} items -Total price: ${carts.reduce((prev, cart) =>{         
        return  prev + cart.price}, 0).toFixed(2)}
        </h4>
        <button>Checkout</button>
    </div>
    
    )
}
export default Carts


// import "./Carts.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function Carts({ carts = [], setCarts }) {
//   // คำนวณราคารวม
//   const totalPrice = carts.reduce((prev, cart) => prev + cart.price, 0);

//   return (
//     <div className="carts-container">
//       <div className="carts-items-container">
//         {carts.length === 0 ? (
//           <h4>Your cart is empty!</h4>
//         ) : (
//           carts.map((cart) => (
//             <Card style={{ width: "18rem" }} key={cart.id}>
//               {cart.thumbnailUrl && (
//                 <Card.Img variant="top" src={cart.thumbnailUrl} />
//               )}
//               <Card.Body>
//                 <Card.Title>{cart.title}</Card.Title>
//                 <Card.Text>
//                   <b>${cart.price.toFixed(2)}</b>
//                 </Card.Text>
//                 <Button
//                   variant="outline-danger"
//                   onClick={() =>
//                     setCarts(carts.filter((c) => c.id !== cart.id))
//                   }
//                 >
//                   Remove from Cart
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))
//         )}
//       </div>
//       <h4>
//         Items: {carts.length} items - Total Price: ${totalPrice.toFixed(2)}
//       </h4>
//       <Button
//         className="btn btn-success"
//         disabled={carts.length === 0}
//         onClick={() => alert("Proceeding to checkout...")}
//       >
//         Checkout
//       </Button>
//     </div>
//   );
// }

// export default Carts;