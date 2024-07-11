'use client';

import React from 'react';

function ProjectItem() {
  return (
    // <div className="grid grid-cols-2 gap-2">
    //   <img src="https://media.loveitopcdn.com/2536/thumb/nha-xuong-khoa-hoc-voi-son-epoxy.jpg" />
    //   <div className="flex flex-col gap-2">
    //     <h3 className="">
    //       Dự Án Thi Công Sơn Epoxy 9000 m2 CTCP Thép Sao Việt
    //     </h3>
    //     <div className="flex gap-2 text-gray-400">
    //       <CalendarOutlined />
    //       <p className="">30/12/2022 15:06</p>
    //     </div>
    //     <p>
    //       Thi công sơn epoxy tại công ty cổ phần thép Sao Việt, Hưng Yên 9000m2.
    //       Độ bền và chất lượng sàn nhà máy rất tốt, màu sắc thẩm mỹ đẹp, bóng
    //       nhé mọi người. Liên hệ 0906.309.569 (Mr Nguyện)
    //     </p>
    //     <Link>Xem thêm</Link>
    //   </div>
    // </div>
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
      <img
        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
        alt="University of Southern California"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        City of love
      </div>
    </article>
  );
}

export default ProjectItem;
