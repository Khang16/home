import { useState, useEffect } from "react";

export default function CartComponent() {
    const [cart, setCart] = useState([]);

    // Load cart from local storage when component mounts
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const handleDecreItem = (item) => {
        const newCart = [...cart];
        const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
        if (index !== -1) {
            newCart[index].quantity -= 1;
            if (newCart[index].quantity === 0) {
                newCart.splice(index, 1);
            }
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    const handleAddItem = (item) => {
        const newCart = [...cart];
        const index = newCart.findIndex((cartItem) => cartItem.id === item.id);
        if (index !== -1) {
            newCart[index].quantity += 1;
        } else {
            newCart.push({ ...item, quantity: 1 });
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
    
    const handleRemoveItem = (item) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <h2>Giỏ hàng</h2>,
        <div>
            
            {cart.map((item, index) => (
                <div  className="cart" key={index}>
                    <p>{item.name}</p>
                    <img src={item.thumbnail} alt={item.name} />
                    <p>Giá: ${item.price}</p>
                    <p>Số lượng: {item.quantity}</p>
                    <button onClick={() => handleDecreItem(item)}>Decre</button>
                    <button onClick={() => handleAddItem(item)}>Add</button>
                    <button onClick={() => handleRemoveItem(item)}>Delete</button>
                    
                </div>
                
            ))}
            <p className="TotalPrice">Tổng giá tiền: {totalPrice.toFixed(2)}$</p>
        </div>
    );
}