import Button from "./Button.jsx"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./store";

export default function Product(props) {
    const { details } = props;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const productFromCart = cart.find(
      (product) => product.id === details.id
    );
    const quantity = productFromCart ? productFromCart.quantity : 0;
  
    const onProductAdd = () => {
      dispatch(addProduct(details));
    };
    const onProductDelete = () => {
      dispatch(removeProduct(details));
    };
  
    return (
      <div className="product">
        <div className="product-image-container">
          <Link to={`/products/${details.id}`}>
            <img
              src={details.image}
              width="100"
              height="100"
              className="product-image"
              alt={details.name}
            />
          </Link>
          {quantity > 0 && (
            <div className="product-quantity-container">
              <div className="product-quantity">{quantity}</div>
            </div>
          )}
        </div>
        <div className="product-info">
          <h3>{details.name}</h3>
          <p>{details.description}</p>
        </div>
        <div className="product-checkout">
          <div>
            {quantity > 0 && (
              <Button
                outline
                onClick={() => onProductDelete(details.id)}
                className="product-delete"
              >
                x
              </Button>
            )}
          </div>
          <Button outline onClick={() => onProductAdd(details)}>
            ${details.price}
          </Button>
        </div>
      </div>
    );
  }

  Product.propTypes = {
    details: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  };  