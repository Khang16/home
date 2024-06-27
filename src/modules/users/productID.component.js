import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ProductComponent } from "./product.component";
import { CiShoppingCart } from "react-icons/ci";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./Loading.json";
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

    const calculateStarColor1 = (index, rating) => {
        if (index < Math.round(rating)) {
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
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            });
    }, [productId]);
    const style = {
        height: 300,
    };

    const App = () => {
        const options = {
            animationData: groovyWalkAnimation,
            loop: true,
            autoplay: true,
        };

        const { View } = useLottie(options, style);

        return View;
    };
    if (!product) return (
        <div>
            <p>Đang tải dữ liệu</p>
            <App></App>
        </div>
    );

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


            <div className="reviews">
                <h5>Đánh giá sản phẩm</h5>
                {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p>
                                {review.reviewerName}<br />
                                {review.comment}<br />

                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        size={24}
                                        color={calculateStarColor1(i, review.rating)}
                                    />
                                ))},<br></br>
                                <span>{review.date}</span>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Không có đánh giá nào</p>
                )}
            </div>
            <hr></hr>
            <h4>CÓ THỂ BẠN CŨNG THÍCH</h4>
            <div onClick={handleClickReload}>
                <ProductComponent />
            </div>
        </>
    );
}

export default ProductIDComponent;
