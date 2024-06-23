import { ProductComponent } from "./product.component";
import Content from "./content.component";
export function Slide() {
    return (
        <>
            <Content></Content>
            <div className="container-slide">
                <div className="body-shopee">
                    <div className="top-left-shopee" >
                        <div id="carouselExampleInterval" className="fix-img carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src="https://cf.shopee.vn/file/vn-50009109-35e97867a072b7cf7c543d45d2c359ee_xxhdpi" className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://cf.shopee.vn/file/vn-50009109-a6c7926ba4f1127e212e5df54443117d_xxhdpi" className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src="https://cf.shopee.vn/file/vn-50009109-571c9ae0c4e2d8f3c452040bb7222b28_xxhdpi" className="d-block w-100" alt="..."></img>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="top-right-shopee ">
                        <img src="https://cf.shopee.vn/file/vn-50009109-3223e0e5ab8d32b96053654cb94be606_xhdpi" alt=""></img>
                        <img src="https://cf.shopee.vn/file/vn-50009109-95cbd9b27571569a990b7aab6e067fb1_xhdpi" alt=""></img>
                    </div>

                </div>

                <div className="sale-shopee">
                   
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="	https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="sale">
                            <img src="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"></img>
                            <p>Khung giờ Săn Sale</p>
                        </div>
                    </a>
                   
                </div>
                
            </div>
            <ProductComponent></ProductComponent>
        </>
    );
}

