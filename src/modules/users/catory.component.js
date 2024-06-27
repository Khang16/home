import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryItem } from "./CategoryItem.component";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./Loading.json";
export function CategoryComponent() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state
    const { categoryName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true); // Start loading
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
                setIsLoading(false); // Stop loading after data is fetched
            })
            .catch(error => {
                console.error('Error fetching category:', error);
                setIsLoading(false); // Stop loading on error
            });
    }, [categoryName]);

    const handleProductClick = (productId) => {
        navigate(`/home/product/${productId}`);
    };
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

    if (isLoading) { // Use isLoading to check if it's loading
        return (
            <div>
                <p>Loading ...</p>
                <App></App>
            </div>
        );
    }

    return (
        <>
            <h3>Chi tiết sản phẩm: {categoryName}</h3><br></br>
            <div className="items_danhmuc">

                {products.map((product) => (
                    <div key={product.id} onClick={() => handleProductClick(product.id)}>
                        <img src={product.thumbnail}></img>
                        <h3>{product.title} </h3>
                        <h5>{product.price}$</h5>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: product.stock }}>

                            </div>
                            <p className="progress-title">Đang bán chạy</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
