import React from 'react';
import '../CSS/About.style.css';
import { Tooltip } from "@chakra-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
export default function About(){
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
                </ul>
            </nav>
            <div className="selfie"></div>
            <p>Mình tên là Trần Bá Phương như ở trang Home các bạn đã nhìn thấy, thì mình hiện đang học tại trường Đại Học Cần Thơ.
                Mình viết những blog này một phần là do bài tập từ Codersx và một phần là do mình muốn xem đây là một nơi kỷ niệm những
                ngày đầu tiên mình làm quen với React.
            </p>
            <p>
                Vào năm 2019, mình đang học cấp 3 và đang nghĩ về những ngành mà mình yêu thích, lúc đó mình chỉ phân vân giữa hai ngành
                 là Kinh doanh và Công nghệ thông tin vì năm cấp 3 mình chỉ giỏi hai môn là Toán và Lý, một phần là mình thích làm việc với
                 máy tính và logic nhưng lại rất sợ lập trình vì khi học Pascal mình chẳng hiểu gì cả. Nhưng rồi cuối cùng mình cũng chọn ngành này
                 vì muốn thử thách bản thân thử xem. Ngày biết kết quả thi, mình được tận 25 điểm với 9.8 môn Toán, điểm số mà rất nhiều người mơ ước
                 nhưng mình vẫn chọn trường Đại Học Cần Thơ vì mình biết rằng ngành này chỉ tự học là chính, nên dù học ở Bách Khoa hay ở đây đều như 
                 nhau.
            </p>
            <p>
                Tháng 7 năm 2019, sau khi biết mình đã đậu vào ngành mình yêu thích, mình bắt đầu tìm hiểu về nó, bắt đầu chập chửng với ngôn ngữ đầu tiên là
                C, mình cứ nghĩ rằng sẽ khó hơn Pascal hàng trăm lần nhưng càng học mình chẳng hiểu sao lại yêu lập trình đến thế. Nó chẳng giống với những
                môn học khác, đòi hỏi suy nghĩ logic rất nhiều để giải quyết vấn đề. Sau khi học xong cơ bản về C, thì tháng 10 mình cùng vài người bạn thi Codewar của FPT và
                may mắn được giải ba và sau đó mình muốn thử thách bản thân thêm nữa bằng việc học Web và Codersx là nơi mình chọn để có thể theo đuổi đam mê của mình.
            </p>
            <p>
                Vào tháng 12 năm 2019, mình bắt đầu học những khóa đầu tiên như JavaScript, HTML, CSS, Git,... và rồi ngày 20 tháng 4 năm 2020, mình đăng kí khóa 2020 rồi bắt đầu học đến khi mình
                viết bài blog này là vào ngày 20 tháng 5, vừa tròn đúng một tháng. Nó đã vượt xa mục tiêu mà mình đã đề ra, mình cảm thấy rất tự hào về bản thân cũng như có thể biết được khả năng của
                bản thân là không có giới hạn. Trong quá trình tự học, mình đã gặp khá nhiều khó khăn nhưng cũng may là có các cộng đồng lập trình viên để mình có thể hỏi và học tập cũng như Google giờ đây
                đã trở thành một công cụ khá đắc lực đối với mình :D 
            </p>
            <p>
                Hiện tại mình vẫn đang tiếp tục học những khóa học mà Codersx đề ra, cũng như tự đặt thêm nhiều mục tiêu cho bản thân trong những tháng tới. Mục tiêu của mình là khi ra trường đã có thể ứng tuyển
                ở vị trị Full Stack ở một công ty nào đó và đó là mục tiêu vô cùng khó khăn nhưng mình tin là mình làm được. Còn bạn, sau khi đọc bài viết này bạn đã đặt mục tiêu gì cho bản thân hay chưa ?
            </p>
            <p>
                <a href="https:fb.com/p.tran3112" className="link" style={{marginRight:30}}>
                    <Tooltip hasArrow label="fb.com/p.tran3112" placement="bottom" className="tooltip">
                        <FacebookIcon fontSize="large"/>
                    </Tooltip>  
                </a>
                <a href="mailto:phuongtr3112@gmail.com" className="link">
                    <Tooltip hasArrow label="phuongtr3112@gmail.com" placement="bottom" className="tooltip">
                        <EmailIcon fontSize="large"/>
                    </Tooltip>
                </a>
            </p>
        </div>
    )
}