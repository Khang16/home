import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ProductComponent } from "./product.component";
import { CiShoppingCart } from "react-icons/ci";
function ProductIDComponent() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const calculateStarColor = (index) => {
        if (index < Math.round(product?.rating)) {
            return "red";
        } else {
            return "gray";
        }
    };

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
        let data = JSON.parse(localStorage.getItem('cart'));
        console.log(data);
    };

    const handleClickReload = () => {
        window.location.reload({ProductComponent});
    
    }
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            });
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <div className="fixSizeProduct">
                <div className="productID">
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="Infor_Product">
                        <h1>{product.title}</h1>
                        <h3>{product.price} $</h3>
                        <h4>{product.description}</h4>
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                size={24}
                                color={calculateStarColor(index)}

                            />
                        ))}
                        <br></br>
                        <br></br>
                        <button onClick={addToCart}>
                            <CiShoppingCart />
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>

            <h4>CÓ THỂ BẠN CŨNG THÍCH</h4>
            <div onClick={handleClickReload}>
                <ProductComponent />
            </div>
        </>

    );

}

export default ProductIDComponent;
