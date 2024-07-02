import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import {
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../appstore/reducers/cartReducer';
export const removeItemFromCart = (itemId) => {
  return async (dispatch) => {
    try {
      // Optional: Perform asynchronous operations (e.g., API calls)
      // await fetch(/* your API endpoint */); // Example API call

      // Dispatch the reducer action after successful removal
      dispatch(removeItem(itemId));
    } catch (error) {
      // Handle errors (optional)
      console.error('Error removing item:', error);
    }
  };
}
const BookmarkItem = ({ bookmark, removeBookmark }) => {
  return (
    <div className="bookmark-item">
      <div className="bookmark-details">
        <h2 className="bookmark-title">{bookmark.title}</h2>
        <img className=" bookmarkImg" src={bookmark?.url} alt="" />
      </div>
      <button
        className="remove-button"
        onClick={() => removeBookmark(bookmark.id)}
      >
        Remove
      </button>
    </div>
  );
};

const BookmarkList = ({ bookmarks, removeBookmark }) => {
  return (
    <div className="bookmark-list">
      <h1>Bookmark List</h1>
      {bookmarks.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          removeBookmark={removeBookmark}
        />
      ))}
    </div>
  );
};
const ShoppingCartItem = ({ item, updateQuantity, removeItem }) => {
  const dispatch = useDispatch();

const handleRemoveItemrtk = (itemId) => {
  dispatch(removeItemFromCart(itemId?.id)); // Dispatch the thunk
};

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h2 className="item-name">{item.name}</h2>
        <p className="item-price">${item.price}</p>
        <div className="quantity-control">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button className="remove-button"  onClick={() => handleRemoveItemrtk(item)}>
          Remove
        </button>
      </div>
    </div>
  );
};

const ShoppingCart = ({ cartItems, updateQuantity, removeItem }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartItemsrtk = useSelector(state => state.cart.items);
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}
      <div className="total-price">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        {cartItemsrtk?.length===0? <button className=" checkoutBtn">Please Add Something in Cart ⭕</button>: <a href="/checkout">
          <button className=" checkoutBtn">Checkout ✅</button>
        </a>}
       
      </div>
    </div>
  );
};
const NavRight = () => {
  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      title: 'Almirah',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3a_pJ2AFt5Em8FZoIVztxzr4oWGauGPk0g&s',
    },
    {
      id: 2,
      title: 'Dinning Table',
      url: 'https://m.media-amazon.com/images/I/8100jx6ZW9L._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 3,
      title: 'Showcase',
      url: 'https://www.99acres.com/microsite/articles/files/2024/04/Modern-Glass-Showcase-Design-2.jpg',
    },
  ]);

  const removeBookmark = id => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Chair',
      price: 29.99,
      quantity: 1,
      image:
        'https://5.imimg.com/data5/FA/FB/BA/SELLER-58809640/wooden-chairs.jpg',
    },
    {
      id: 2,
      name: 'Bed',
      price: 19.99,
      quantity: 2,
      image:
        'https://5.imimg.com/data5/FA/FB/BA/SELLER-58809640/wooden-chairs.jpg',
    },
    {
      id: 3,
      name: 'Dinning Table',
      price: 39.99,
      quantity: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCJJAPbh3eaXyDUH9SHv7ksVadSw-pH8CFw&s',
    },
  ]);
  const handleQuantityChange = (productId, quantity) => {
    setProducts(
      products.map(product =>
        product.id === productId
          ? { ...product, quantity: parseInt(quantity) }
          : product
      )
    );
  };

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A software developer from New York who loves to create beautiful and functional web applications.',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s',
  };
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = newOpen => {
    setOpen(newOpen);
  };
  const [openuser, setOpenuser] = useState(false);

  const hideuser = () => {
    setOpenuser(false);
  };

  const handleOpenChangeuser = newOpenuser => {
    setOpenuser(newOpenuser);
  };
  const [openbookmark, setOpenbookmark] = useState(false);

  const hidebookmark = () => {
    setOpenbookmark(false);
  };

  const handleOpenChangebookmark = newOpenbookmark => {
    setOpenbookmark(newOpenbookmark);
  };
  const cartItemsrtk = useSelector(state => state.cart.items);
  console.log(cartItemsrtk,'cartItemsrtk');
  const [cartItems, setCartItems] = useState(
    
    [
    {
      id: 1,
      name: 'Chair',
      price: 30.99,
      quantity: 1,
      image:
        'https://5.imimg.com/data5/FA/FB/BA/SELLER-58809640/wooden-chairs.jpg',
    },
    {
      id: 2,
      name: 'Bed',
      price: 1200.99,
      quantity: 2,
      image:
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d896ddfe-f061-4330-be09-9638a5228628.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    },
    // Add more products as needed
  ]
);
useEffect(() => {
  setCartItems(cartItemsrtk)
  //Runs only on the first render
}, [cartItemsrtk]);
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  return (
    <div className="nav-right">
      <Popover
        content={
          <ShoppingCart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        }
        title="Shopping Cart"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <button className=" cartbtn">
          <ShoppingCartOutlined className="carticon" />
        </button>
      </Popover>
      <Popover
        content={
          <BookmarkList bookmarks={bookmarks} removeBookmark={removeBookmark} />
        }
        title="Bookmark"
        trigger="click"
        open={openbookmark}
        onOpenChange={handleOpenChangebookmark}
      >
        <button className=" cartbtn">
          <HeartOutlined className="carticon" />
        </button>
      </Popover>
      <Popover
        content={
          <div className="user-card">
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="user-avatar"
            />
            <div className="user-details">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-email">{user.email}</p>
              <p className="user-bio">{user.bio}</p>
            </div>
          </div>
        }
        title="Profile"
        trigger="click"
        open={openuser}
        onOpenChange={handleOpenChangeuser}
      >
        <button className=" cartbtn">
          <UserOutlined className="carticon" />
        </button>
      </Popover>
    </div>
  );
};

export default NavRight;
