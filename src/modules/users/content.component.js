import { useEffect, useState } from "react";
import axios from 'axios';
import { CategoryItem } from "./CategoryItem.component";
import { useNavigate } from "react-router-dom";

function Content() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    
    const handleDetailProducts = (categoryName) => {
        navigate(`/home/category/${categoryName}`);
    }

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched categories:', data); 
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, [],);

    const CountdownTimer = () => {
        const [timeLeft, setTimeLeft] = useState("");

        useEffect(() => {
            const countDownDate = new Date("2025-03-09 21:00:00").getTime();

            const timer = setInterval(() => {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(`${days} : ${hours} : ${minutes} : ${seconds}`);

                if (distance <= 0) {
                    clearInterval(timer);
                    setTimeLeft("hết hạn");
                }
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        return <div id="demo">{timeLeft}</div>;
    };

    return (
        <>
            <div className="content_danhmuc">
                {categories.map((category, index) => (
                    <div  onClick={() => handleDetailProducts(category)} key={index}>
                        <CategoryItem 
                            key={category}
                            src={`https://dummyimage.com/100x100/000/fff&text=${category}`}
                            alt={category}
                            text={category}
                        />
                    </div>
                ))}
            </div>

            <div className="flash_sale">
                <div className="count_down">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png" alt="..."></img>
                    <div className="times">
                        <CountdownTimer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
