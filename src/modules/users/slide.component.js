import { ProductComponent } from "./product.component";
import Content from "./content.component";
import Carousel from 'react-bootstrap/Carousel';

export function Slide() {
    return (
        <>
            <Content></Content>
            <div className="container-slide">
                <div className="body-shopee">
                    <div className="top-left-shopee" >                      
                        <Carousel fade>
                            <Carousel.Item interval={500}>
                                <img src="https://cf.shopee.vn/file/sg-11134258-7rd40-lwqt65s8ttmw82_xxhdpi" alt=""></img>

                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img src="https://cf.shopee.vn/file/vn-50009109-35e97867a072b7cf7c543d45d2c359ee_xxhdpi" alt=""></img>

                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img src="https://cf.shopee.vn/file/vn-50009109-571c9ae0c4e2d8f3c452040bb7222b28_xxhdpi" alt=""></img>

                            </Carousel.Item>
                        </Carousel>  
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

