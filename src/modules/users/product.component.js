import { useEffect, useState } from "react";
import { Slide } from "./slide.component";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProductIDComponent } from "./productID.component";
export function ProductComponent() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const urlParams = useParams();
    useEffect(
        () => {
            fetch('https://dummyjson.com/products?limit=0&skip=0')
                .then(res => res.json())
                .then(json => {
                    setProducts(json.products)
                })
        },
        []
    );
    const handleDetailProducts = (productId) => {
        navigate(`/home/product/${productId}`);
    }
    return (
        <div className="all_products">
            {products.map(
                product => (

                    <div onClick={() => handleDetailProducts(product.id)} className="product" key={product.index}>
                        <img src={product.thumbnail}></img>
                        <p>{product.title} </p>
                        <span>{product.price}$</span>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: product.stock }}></div>
                            <p className="progress-title">Đang bán chạy</p>
                        </div>

                    </div>
                )
            )}
        </div>
    );
}
