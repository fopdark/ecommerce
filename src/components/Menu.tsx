'use client';

import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import React, { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   {
//     label: "Home",
//     key: "mail",
//     icon: <MailOutlined />,
//   },
//   {
//     label: "Giới thiệu",
//     key: "app",
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: "Sản phầm",
//     key: "SubMenu",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           { label: "Option 1", key: "setting:1" },
//           { label: "Option 2", key: "setting:2" },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           { label: "Option 3", key: "setting:3" },
//           { label: "Option 4", key: "setting:4" },
//         ],
//       },
//     ],
//   },
//   {
//     key: "2",
//     label: "Dịch vụ",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           { label: "Option 1", key: "setting:1" },
//           { label: "Option 2", key: "setting:2" },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           { label: "Option 3", key: "setting:3" },
//           { label: "Option 4", key: "setting:4" },
//         ],
//       },
//     ],
//   },
//   {
//     key: "3",
//     label: "Báo giá",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           { label: "Option 1", key: "setting:1" },
//           { label: "Option 2", key: "setting:2" },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           { label: "Option 3", key: "setting:3" },
//           { label: "Option 4", key: "setting:4" },
//         ],
//       },
//     ],
//   },
//   {
//     key: "4",
//     label: "Thi công",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           { label: "Option 1", key: "setting:1" },
//           { label: "Option 2", key: "setting:2" },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           { label: "Option 3", key: "setting:3" },
//           { label: "Option 4", key: "setting:4" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Tin tức",
//     key: "news",
//     icon: <MailOutlined />,
//   },
//   {
//     label: "Dự án",
//     key: "plan",
//     icon: <MailOutlined />,
//   },
//   {
//     label: "Liên hệ",
//     key: "contact",
//     icon: <MailOutlined />,
//   },
// ];

const items: MenuItem[] = [
  {
    label: 'Sơn Epoxy, Sơn Sàn',
    key: '1',
  },
  {
    label: 'Sơn Sàn PU',
    key: '2',
  },
  {
    label: 'Chống Thấm',
    key: '3',
  },
  {
    label: 'Phủ FRP, Phủ Compositer',
    key: '4',
  },
  {
    label: 'Đánh Bóng Bê Tông',
    key: '5',
  },
  {
    label: 'Sơn Thể Thao',
    key: '6',
  },
];

const MenuAntd: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            padding: 8,
            fontSize: 18,
          },
        },
      }}
    >
      <div className="bg-white sticky top-0 z-10 border border-gray-300 p-4 ">
        <div className="max-w-[1200px] mx-auto flex gap-10">
          <img src="/assets/img/logo/logo.png" className="h-[46px]" />
          <div className="flex-1 flex justify-center">
            <Menu
              className="bg-transparent w-full font-bold"
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              // theme="dark"
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default MenuAntd;
