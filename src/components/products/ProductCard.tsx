'use client';

import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;
function ProductCard(props: any) {
  const { img, name } = props;
  return (
    <div className="px-2">
      <Card
        //   style={{ width: 300 }}
        cover={
          <img alt="example" src={img} className=" border border-[#F0F0F0]" />
        }
        //   actions={[
        //     <SettingOutlined key="setting" />,
        //     <EditOutlined key="edit" />,
        //     <EllipsisOutlined key="ellipsis" />,
        //   ]}
      >
        <Meta
          // avatar={
          //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          // }
          title={name}
          description={
            <div className="text-black">
              {/* <h2 >LT313 - Sơn Dầu Alkyd</h2> */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-baseline">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <p className="w-[calc(100%_-_20px)]">
                    Sơn phủ gốc dầu Alkyd.
                  </p>
                </div>
                <div className="flex gap-2 items-baseline">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <p className="w-[calc(100%_-_20px)]">
                    Độ bám dính cao, sáng bóng, chống lại sự ăn mòn của nước
                    biển, dầu khoáng, kiềm, axit.
                  </p>
                </div>
                <div className="flex gap-2 items-baseline">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <p className="w-[calc(100%_-_20px)]">
                    Sử dụng cho sắt thép, kim loại có độ ăn mòn vừa phải.
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default ProductCard;
