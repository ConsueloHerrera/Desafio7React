import  { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, totalPrice, totalQuantity } = useContext(CartContext);
  const {user} =useContext(UserContext)

  return (
    <Container className="cart-container mt-4">
      <h1>Carrito de Compra</h1>
      <div className="cart-summary mt-4">
        <h3>Total: ${totalPrice}</h3>
        <h3>Total Cantidad: {totalQuantity}</h3>
      </div>
      <div className="container-list">
        {cartItems.map((pizza) => (
          <div className="pizza-container" key={pizza.id}>
            <div className="pizza-info">
              <img
                className="pizza-img"
                src={pizza.img}
                alt={`Imagen ${pizza.name}`}
              />
              <div className="container-details">
                <div className="pizza-details">
                  <div>Pizza {pizza.name}</div>
                  <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                      <li className="ingredients-list" key={index}>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="pizza-price">${pizza.price}</p>
              </div>
            </div>
            <div className="quantity-controls">
              <Button
                variant="dark"
                className="me-2"
                onClick={() => decrementQuantity(pizza.id)}>
                -
              </Button>
              <div className="quantity">{pizza.quantity || 0}</div>
              <Button
                variant="dark"
                className="ms-2"
                onClick={() => incrementQuantity(pizza.id)}>
                +
              </Button>
            </div>
          </div>
        ))}
      </div>
      {user ? <Button variant='dark'>Pagar</Button> : <Button variant='dark' disabled>Pagar</Button>}
      
    </Container>
  );
};

export default Cart;
