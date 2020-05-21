import React from 'react';
import "../../CSS/firebase.style.css"
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
            <div className="img"></div>
            <p>
                <h1>Firebase (Realtime Database) - Có nên dùng cho các ứng dụng lớn ?</h1>
            </p>
            <p>
            Nếu bạn là người mới, đang học làm app với Firebase hoặc đang dùng Firebase cho các ứng dụng nhỏ và cảm thấy ổn, bạn hãy bỏ qua bài viết này.
            </p>
            <p>
            Nếu bạn đang cân nhắc sử dụng Firebase cho các ứng dụng lớn, lưu trữ data hoàn toàn trên Firebase, thì mình hy vọng qua bài này sẽ giúp được phần nào.
            </p>
            <p>
            Firebase đã quá nổi tiếng nên mình sẽ không phải giới thiệu nữa. Và mình chỉ nói riêng về Realtime Database của nó thôi chứ không phải tất cả.
             Chúng ta hãy xem xét trường hợp sau đây:
            </p>
            <p>
            Bạn đang cần viết ứng dụng e-commerce và sử dụng Firebase lưu data, trong ứng dụng có tính năng WishList. User sẽ được phép thêm rất nhiều sản
             phẩm vào wish list của họ, miễn là chúng không trùng nhau. Liệu bạn sẽ xây dựng cấu trúc lưu trữ trong Firebase ra sao để tính năng này work tốt nhất có thể:
            </p>
            <p>
                <h3>Giải pháp 1: Mỗi user có key “wish_list”, trong này chứa luôn các products họ yêu thích</h3>
            </p>
            <p>
            Giải pháp này là dễ nhất, đơn giản là chỉ cần add nguyên cái object product vào đây là xong. Cần realtime chỉ cần listen trong wish_list của user logged in.
             Tuy nhiên khi chúng ta update sản phẩm (giá, tình trạng sản phẩm), chúng ta phải quét qua hết tất cả user để update lại cái product trong wish_list của họ. 
             Mất rất nhiều thời gian và băng thông và dữ liệu bị mất tính nhất quán rất nhanh. Với lại cách này data nó không được flatten, không phải là best practice.
            </p>
            <p>
                <h3>Giải pháp 2: Tạo riêng WishList ở ngoài, trong mỗi item có key UserID để biết là của ai.</h3>
            </p>
            <p>
            Cách này cũng như cách trên, nhưng đỡ cái là khỏi phải đi quét qua tất cả user, update product nhanh hơn nhiều. Tuy nhiên cách này vướng phải 1 cái khó chịu
             hơn là mình cần realtime cho WishList riêng cho 1 user logged in thôi thì không được. Client lúc nào cũng nhận event mỗi khi bất kỳ user trên hệ thống tương tác vào WishList.
              Điều này ảnh hưởng hiệu năng đáng kể.
            </p>
            <p>
                <h3>Giải pháp 3: Làm theo kiểu RDBMS, chỉ nhớ Product IDs thôi.</h3>
            </p>
            <p>
            Cách này có nhiều loại thi công: mảng productIDs trên mỗi user, 1 object riêng để map UserID và ProductID. Dù là cách nào thì khi chúng ta lấy thông tin sản phẩm trên WishList đều rất rắc rối.
            </p>
            <p>
            VD nhé wish list ta có [1,4,8], 3 sản phẩm với ID lần lược là 1,4 và 8. Khi ta cần lấy các chi tiết các sản phẩm này (màn hình danh sách wish list của user chẳng hạn) thì chúng ta phải đi lấy sản
             phẩm có ID là 1, rồi 4, rôi 8. Mà hàm lấy details nó chạy async nên chúng ta phải dùng 1 cái group queue hoặc kỹ thuật lập trình tương đương để đảm bảo là đã fetch xong tất cả details cho mảng trên….
            </p>
            <p>
            Ôi trời tất cả chỉ là do Firebase không có các câu lệnh query để join object hoặc kiểu aggressive hay map reduce gì cả. Bài toán trên nghe chừng khá đơn giản nhưng bắt gặp cũng không ít trên các ứng dụng phổ biến. 
            Chưa nói tới những ứng dụng có các mối quan hệ dữ liệu phức tạp hơn.
            </p>
            <p>
            Vậy ta có nên sử dụng Firebase cho ứng dụng lớn không ?? Thật ra là cũng CÓ, nhưng nó là 1 phần của hệ thống chứ không phải tất cả. VD app bán hàng có thể dùng Firebase cho phần chat với chủ cửa hàng, 
            cập nhật trạng thái đơn hàng realtime chẳng hạn.
            </p>
            <p>
            ** Thật ra ngắn gọn là ứng dụng lớn ít ai dùng serverless lắm, nếu không muốn sau này trả giá đắt để ngồi làm lại.

            </p>
            <p>
            OK chúc các bạn thành công.
            </p>
            <p>
                <b>Nguồn:</b> https://viettranx.com/blog/firebase-co-nen-dung-cho-ung-dung-lon/
            </p>
        </div>
    )
}