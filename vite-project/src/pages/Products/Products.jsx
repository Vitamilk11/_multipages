import "./Products.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

function Products({ products, carts, setCarts }) {
  useEffect(() => {
    console.log("Carts updated: ", carts); // ตรวจสอบการอัปเดตของ carts
  }, [carts]);

  return (
    <div className="products-container">
      <div className="products-itemps-container">
        {products.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <b>${product.price.toFixed(2)}</b>
              </Card.Text>

              {carts.some((cart) => cart.id === product.id) ? (
                <span className="badge bg-danger">Added</span>
              ) : (
                <Button
                  variant="outline-primary"
                  onClick={ () => {
                    setCarts([...carts, product]);
                  }}
                >
                  Add To Cart
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;



// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import "./Products.css";

// function Products({ products, carts, setCarts }) {
//   return (
//     <div className="products-container">
//       <div className="products-items-container">
//       {products.map((product) => {
//         return (
//             <Card style={{ width: "18rem" }} key={product.id}>
//             <Card.Img variant="top" src="{product.thumbnailUrl}" />
//             <Card.Body>
//               <Card.Title>{product.title}</Card.Title>
//               <Card.Text><b>${product.price.toFixed(2)}</b></Card.Text>


//             {carts.find((cart) =>  cart.id === product.id) ? (
//               <span claasName="badge bg-danger">Added</span>
//             )
//             : (
//               <Button variant="primary" 
//                 onClick={() => {
//                 setCarts([...carts, product]);
//               }}>Add to Carts</Button>
//             ) }
//             </Card.Body>
//           </Card>
//         )
//       })}
//       </div>
//     </div>
//   );
// }

// export default Products;
