import { IoIosNotificationsOutline } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export function HeaderComponent() {

    const [title, setTitle] = useState('');
    const [products, setProducts] = useState([]);
    const [nameLogin, setNameLogin] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://dummyjson.com/users/1')
            .then(res => res.json())
            .then(json => {
                setNameLogin(json);
            })
            .catch(error => {
                console.error("Error fetching nameLogin data:", error);
            });

    }, []);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
            });
    }, []);

    const handleChangeTitle = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (newTitle.length > 0) {
            document.querySelector(".displaySearch").style.display = "block";
        } else {
            document.querySelector(".displaySearch").style.display = "none";
        }
    }
    const handleAddCart = () => {
        navigate("/home/cart")
    }
    // Hàm tìm kiếm sản phẩm dựa trên tên
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(title.toLowerCase())
    );


    // Xử lý khi người dùng nhập vào ô tìm kiếm


    return (
        <div className="allHeader">
            <div className="container_header1">
                <div className="header_left">
                    <p>Kênh bán hàng</p>
                    <p>Tải ứng dụng</p>
                    <p>Kết nối</p>
                </div>
                <div className="header_right">

                    <a href="#">
                        <IoIosNotificationsOutline></IoIosNotificationsOutline>
                        Thông báo
                    </a>
                    {/* <a href="#">
                        <FaQuestion></FaQuestion>
                        Hỗ trợ
                    </a> */}
                    <a href="#">
                        <GrLanguage></GrLanguage>
                        Tiếng việt
                    </a>
                    <a href="#">
                        <RiAdminLine />

                        {nameLogin.firstName} {nameLogin.maidenName} {nameLogin.lastName}

                        <div className="admin">
                            <a href="">Tài khoản của tôi</a>
                            <a href="">Đơn mua</a>
                            <a href="">Đăng xuất</a>
                        </div>
                    </a>
                </div>
            </div>

            <div className="container_header2">
                <Link to="/home/slide">
                    <img src="https://freelogopng.com/images/all_img/1656181621shopee-logo-white.png" alt="Shopee Logo" />
                </Link>
                <div className="container_search">
                    <input value={title} placeholder="TÌm kiếm " onChange={handleChangeTitle}></input><br />
                    <div className="displaySearch">
                        {filteredProducts.map(product => (
                            <Link to={"/home/product/" + product.id} key={product.id}>{product.title}</Link>
                        ))}
                    </div>
                    <div className="icon_search">
                        <FaSearch></FaSearch>
                    </div>
                </div>
                <div className="iconCart" onClick={handleAddCart}>
                    <BsCart3 />

                </div>
            </div>
        </div>
    )
}