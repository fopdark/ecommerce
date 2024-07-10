/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

"use client";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import MenuAntd from "@/components/Menu";
import SliderSlick from "@/components/Slider";
import News from "@/components/news/News";
import NewsItem from "@/components/news/NewsItem";
import ProductAnimationSlider from "@/components/products/ProductAnimationSlider";
import ProductSlider from "@/components/products/ProductSlider";
import Project from "@/components/project/Project";
import ProjectSlider from "@/components/project/ProjectSlider";
import ReviewSlider from "@/components/reviews/ReviewSlider";
import { Avatar, Button, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import { InfoCircleOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import GoogleMap from "@/components/map/GoogleMap";
import Search from "antd/es/input/Search";

export default function MainPage() {
  // return (
  //   // <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
  //     <div className="relative py-3 sm:max-w-xl sm:mx-auto">
  //       <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
  //       <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
  //         <div className="text-center pb-6">
  //           <h1 className="text-3xl">Đăng Ký Nhận Thông Tin Tư Vấn</h1>

  //           <p className="text-gray-300">
  //             Gửi thông tin cho chúng tôi để được tư vấn báo giá
  //           </p>
  //         </div>

  //         <form action="https://fabform.io/f/{form-id}" method="post">
  //           <input
  //             className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //             type="text"
  //             placeholder="Nhập tên"
  //             name="name"
  //           />

  //           <input
  //             className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //             type="text"
  //             placeholder="Nhập số điện thoại"
  //             name="phone"
  //           />

  //           <textarea
  //             className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //             placeholder="Vui lòng nhập nội dung"
  //             name="message"
  //             style={{ height: "121px" }}
  //           ></textarea>

  //           <div className="flex justify-center">
  //             <input
  //               className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 "
  //               type="submit"
  //               value="Gửi ➤"
  //             />
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   // </div>
  // );
  return (
    <>
      <div className="bg-[#000080]">
        <div className=" flex justify-between max-w-[1200px] mx-auto p-4">
          <div className="flex gap-2">
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Trang chủ
            </Link>
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Giới thiệu
            </Link>
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Tư vấn
            </Link>
            <Link className="border-r border-gray-500 last:border-r-0 pr-2 !text-white">
              Liên hệ
            </Link>
          </div>
          <div className=" flex items-center gap-2">
            <b className="!text-white">Hotline:</b>
            <Link className="!text-white" href="tel:+84915441511">
              0915.441.511 ( Mr.Duy) 
            </Link>
            <p className="text-white">-</p>
            <Link className="!text-white" href="tel:+84912851511">
              0912. 851.511 (Ms.Thư)
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between max-w-[1200px] mx-auto">
        <img
          src="https://bepcongnghiepinox.com.vn/upload/photo/bep-cong-nghiep-2061.png"
          className="h-20"
        />
      </div> */}
      <div>
        <MenuAntd />
        <SliderSlick />
        <div className="max-w-[1200px] mx-auto py-0">
          <div className="py-10">
            <div className="flex justify-center ">
              <h2 className="text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Dịch Vụ Nổi Bật
              </h2>
            </div>
            <div className="bg-white bg-gradient-to-r from-[#000080] to-indigo-300 h-full py-6 sm:py-8 lg:py-12 rounded-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/1.jpg"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Sơn Epoxy, sơn sàn
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/2.jpg"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Phủ sàn pu
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/8.jpg"
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Chống thấm
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="/assets/img/compositer/2.jpg"
                      loading="lazy"
                      alt="Photo by Lorenzo Herrera"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Phủ FRP, phủ Compositer
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                  >
                    <img
                      src="/assets/img/compositer/5.jpg"
                      loading="lazy"
                      alt="Photo by Minh Pham"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Đánh bóng bê tông
                    </span>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                  >
                    <img
                      src="/assets/img/epoxy/5.jpg"
                      loading="lazy"
                      alt="Photo by Magicle"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-2xl capitalize">
                      Sơn thể thao
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto py-10">
            <div className="flex justify-center">
              <h2 className="text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Vì Sao Nên Chọn Chúng Tôi
              </h2>
            </div>
            {/* <News /> */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className=" shadow-md bg-gradient-to-tr from-[#000080] to-green-300 rounded-lg p-10 h-full">
                  <p className="text-white">
                    Nếu quý khách mua sơn tại DiepKienHuy, chúng tôi sẽ tư vấn
                    cho bạn những thông tin chi tiết về từng loại sơn. Nếu quý
                    khách muốn đặt mua sơn tại DiepKienHuy, xin vui lòng liên hệ
                    trực tiếp với chúng tôi để nhận được sự hỗ trợ, tận tình
                    nhất từ đội ngũ nhân viên của chúng tôi. DiepKienHuy rất
                    mong nhận được nhiều hơn nữa sự quan tâm và ủng hộ từ khách
                    hàng để ngày càng phát triển hơn nữa trong tương lai. Chúng
                    tôi rất hân hạnh đón tiếp quý khách.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-2 ">
                  <Avatar
                    src="/assets/img/construction/process.png"
                    size={60}
                  />
                  <p className="font-bold text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Quy Trình Chuyên Nghiệp
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <Avatar
                    src="/assets/img/construction/teamwork.png"
                    size={60}
                  />
                  <p className="font-bold text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Đội Ngũ Kỹ Thuật Giỏi
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar src="/assets/img/construction/award.png" size={60} />
                  <p className="font-bold text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Quy Trình Đạt Chuẩn
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar src="/assets/img/construction/star.png" size={60} />
                  <p className="font-bold text-2xl p-4 bg-gradient-to-r from-[#000080] to-green-300 rounded-full w-full text-white">
                    Hậu Mãi Tốt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex justify-center">
              <h2 className="text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Sản Phẩm Nổi Bật
              </h2>
            </div>
            <ProductSlider isPrice={false} />
          </div>
          <div className="py-10">
            <div className="flex justify-center">
              <h2 className="text-4xl text-center text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Công Trình Đã Thi Công
              </h2>
            </div>
            <ProjectSlider />
          </div>
          <div className="min-h-[600px] bg-[url('/assets/img/construction/bg-get-info.jpg')] flex flex-col justify-center rounded-2xl bg-cover">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="text-white relative px-2 py-5 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-5">
                <div className="text-center pb-3">
                  <h1 className="text-2xl">Đăng Ký Nhận Thông Tin Tư Vấn</h1>
                  <p className="text-gray-300 text-sm">
                    Gửi thông tin cho chúng tôi để được tư vấn báo giá
                  </p>
                </div>

                <form action="https://fabform.io/f/{form-id}" method="post">
                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Nhập tên"
                    name="name"
                  />

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    name="phone"
                  />

                  <textarea
                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Vui lòng nhập nội dung"
                    name="message"
                    style={{ height: "121px" }}
                  ></textarea>

                  <div className="flex justify-center">
                    <input
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 "
                      type="submit"
                      value="Gửi ➤"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-2"> */}
          <div className="p-5 ">
            <div className="flex justify-center">
              <h2 className="text-4xl text-bold mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
                Đánh Giá Khách Hàng
              </h2>
            </div>
            <p className="text-center">
              Cùng với đội ngũ nhân viên giàu kinh nghiệm và nhiệt huyết luôn
              nhận được sự ủng hộ thường xuyên
            </p>
            <ReviewSlider />
          </div>
        </div>
      </div>
      <Footer />
      <GoogleMap />
    </>
  );
}
