import React from 'react';
import "../../CSS/firebase.style.css";
export default function fireba(){
    return(
        <div className="blog-about">
             <nav className="nav">
                <ul className="list">
                    <li className="item">
                        <a class="linknav" href="/">Home</a>
                    </li>
                    <li className="item">
                        <a class="linknav" href="/blog">Blog</a>
                    </li>
                    <li className="item">
                        <a class="linknav" href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <div className="bnb"></div>
                <p>
                Airbnb là một startup với mô hình kết nối người cần thuê nhà, thuê phòng nghỉ với những người có phòng cho thuê trên khắp thế giới. Với những ngôi nhà đẹp lung linh, giá cả phải chăng, chất lượng tốt, nhiều người đã chọn phòng qua Airbnb thay vì khách sạn
                . Nhưng cũng vì vậy mà Airbnb phải đối mặt với câu hỏi được các chủ nhà quan tâm nhất: "How do I pick the right price?" (Làm thế nào để tôi chọn được đúng giá cho tài sản của mình?)
                </p>
                <p>
                Thật khó để thiết lập giá phòng hợp lý, nhất là các cô bác lớn tuổi, chưa kể là giá phòng biến động theo mùa, theo xu hướng du lịch hoặc khu vực. Thấy được điều đó từ việc lắng nghe và
                 phân tích những gì User tìm kiếm và booking trên Airbnb, họ đã ra mắt công cụ "Smart Pricing" giúp cho các host có thể thiết lập giá theo ngày dễ dàng hơn, cá nhân hoá hơn.
                </p>
                <p>
                Từ việc đối mặt và giải quyết vấn đề của Airbnb, ta có thể rút ra được kết luận như sau:
                </p>
                <p>
                - Việc lắng nghe và phân tích data rất quan trọng, nó cho bạn biết được những thiếu sót của bạn hay những khó khăn mà User đang đối mặt trên nền tảng của bạn.
                </p>
                <p>
                - Sự tiện lợi, dễ dùng là yêu cầu cơ bản của những ứng dụng ngày nay, nhưng những tiện ích mà bạn mang lợi ở mỗi chức năng là điều thu hút và giữ chân User sử dụng nền tảng của mình.
                </p>
                <p>
                    <b>Nguồn: </b> https://medium.com/airbnb-engineering/how-we-deliver-insights-to-hosts-7d836520a38
                </p>
        </div>
    )
}
