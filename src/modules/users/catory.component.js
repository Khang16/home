import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryItem } from "./CategoryItem.component";

export function CategoryComponent() {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams(); // Use useParams to get the category name from the URL
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched category:', data);  // Debug log
                setProducts(data.products); // Assume the API returns an object with a 'products' array
            })
            .catch(error => console.error('Error fetching category:', error));
    }, [categoryName]);

    const handleProductClick = (productId) => {
        navigate(`/home/product/${productId}`);
    };

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
