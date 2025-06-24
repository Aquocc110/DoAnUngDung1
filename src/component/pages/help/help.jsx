import React from 'react';
import style from './help.module.css';

function Help() {
    return (
        <div className={style.helpContainer}>
            <h1 className={style.helpTitle}>Trợ giúp Google Keep</h1>
            <p className={style.helpDescription}>
                Tìm hiểu cách bắt đầu sử dụng Keep, tạo ghi chú, danh sách và nhiều hơn nữa.
            </p>

            <div className={style.helpTopics}>
                <div className={style.helpTopic}>
                    <h3>Bắt đầu với Google Keep</h3>
                    <p>Hướng dẫn cơ bản để bạn làm quen với giao diện và tính năng của Keep.</p>
                </div>

                <div className={style.helpTopic}>
                    <h3>Tạo, chỉnh sửa và chia sẻ ghi chú</h3>
                    <p>Cách tạo ghi chú nhanh, đính kèm hình ảnh, thêm màu và chia sẻ với người khác.</p>
                </div>

                <div className={style.helpTopic}>
                    <h3>Tạo và sử dụng danh sách checklist</h3>
                    <p>Hướng dẫn tạo checklist để theo dõi công việc hoặc việc cần làm.</p>
                </div>

                <div className={style.helpTopic}>
                    <h3>Gắn nhãn và phân loại ghi chú</h3>
                    <p>Quản lý ghi chú hiệu quả bằng cách sử dụng nhãn và màu sắc.</p>
                </div>
            </div>
        </div>
    );
}

export default Help;
