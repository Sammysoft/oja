import ads_img1 from "../assets/ads1.png";
import ads_img2 from "../assets/ads2.png";
import ads_img3 from "../assets/ads3.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import tv1 from "../assets/tv1.png";
import tv2 from "../assets/tv2.png";
import tv3 from "../assets/tv3.png";
import tv4 from "../assets/tv4.png";

export const Adverts = [
  {
    text: "Got something to SELL?",
    background: "#3C0300",
    img_src: ads_img1,
  },
  {
    text: "Find affordable phones near you",
    background: "#08003C",
    img_src: ads_img2,
  },
  {
    text: "Electronics all in one place!",
    background: "#293C00",
    img_src: ads_img3,
  },
];

export const category = {
  phones: [
    {
      id: 1,
      img_src: phone1,
      item_name: "Apple iPhone XR 64gb with FaceID",
      item_price: "# 109,500",
    },
    {
      id: 2,
      img_src: phone2,
      item_name: "Samsung S20 Ultra 256gb",
      item_price: "# 290,000",
    },
    {
      id: 3,
      img_src: phone3,
      item_name: "Apple iPhone 12 Pro 128gb",
      item_price: "# 310,000",
    },
    {
      id: 4,
      img_src: phone4,
      item_name: "Xiaomi Redmi Note 11",
      item_price: "# 131,000",
    },
  ],
  cars: [
    {
      id: 1,
      img_src: car1,
      item_name: "Toyota Camry 2015",
      item_price: "# 709,500",
    },
    {
      id: 2,
      img_src: car2,
      item_name: "Toyota Camry 1996",
      item_price: "# 605,000",
    },
    {
      id: 3,
      img_src: car3,
      item_name: "Nissan Almera 2005",
      item_price: "# 900,000",
    },
    {
      id: 4,
      img_src: car4,
      item_name: "Volkswagen Golf 2010",
      item_price: "# 670,000",
    },
  ],
  tvs: [
    {
      id: 1,
      img_src: tv1,
      item_name: "LG 32” Television",
      item_price: "# 64,000",
    },
    {
      id: 2,
      img_src: tv2,
      item_name: "Hisense 40” TV",
      item_price: "# 105,000",
    },
    {
      id: 3,
      img_src: tv3,
      item_name: "Small Home Theatre",
      item_price: "# 20,000",
    },
    {
      id: 4,
      img_src: tv4,
      item_name: "Polystar Television",
      item_price: "# 32,000",
    },
  ],
};
