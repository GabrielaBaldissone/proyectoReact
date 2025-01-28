import { MdOutlineShoppingCart } from 'react-icons/md';

const CartWidget = () => {
  const cartContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    fontSize: '30px',
  };

  const circleStyle = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  return (
    <div style={cartContainerStyle}>
      <MdOutlineShoppingCart />
      <div style={circleStyle}>2</div>
    </div>
  );
};

export default CartWidget;
