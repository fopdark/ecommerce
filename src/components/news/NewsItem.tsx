'use client';

import { CalendarOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import React from 'react';

function NewsItem() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <img src="https://media.loveitopcdn.com/2536/thumb/dinh-muc-du-toan-son-epoxy.jpg" />
      <div className="flex flex-col gap-2">
        <h3 className="">
          Hướng Dẫn Tính Tỉ Lệ Sơn Epoxy Cần Dùng Cho Sàn Nhà Xưởng
        </h3>
        <div className="flex gap-2 text-gray-400">
          <CalendarOutlined />
          <p className="">30/12/2022 15:06</p>
        </div>
        <p>
          Chi tiết cách tính đúng tỉ lệ sơn epoxy giúp bạn kiểm soát và mua đủ
          lượng sơn epoxy cần thiết phục vụ cho việc thi công nhà xưởng của
          mình. Tư vấn miễn phí 0906.309.569 (Mr Nguyện)
        </p>
        <Link>Xem thêm</Link>
      </div>
    </div>
  );
}

export default NewsItem;
