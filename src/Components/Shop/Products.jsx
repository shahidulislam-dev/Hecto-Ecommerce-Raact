import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaListUl } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { apiData } from "../ContextApi";
import WaterMark from "../../assets/watermark.png";
import { FiZoomIn, FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Products = () => {
  const data = useContext(apiData);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    setBrands([...new Set(data.map((item) => item.brand))]);
  }, [data]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(item.brand);
      return categoryMatch && brandMatch;
    });
    setFilteredProducts(filtered);
  }, [data, selectedCategories, selectedBrands]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  

  return (
    <section className="pt-32">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <h4 className="font-josef font-semibold text-secondery text-[22px]">
              Ecommerce Acceories & Fashion item{" "}
            </h4>
            <p className="font-lato font-[400px] text-[12px] text-[#8A8FB9]">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex items-center justify-between w-[50%]">
            <div className="flex items-center gap-2">
              <h6 className="font-lato font-[400px] text-[16px] text-[#3F509E]">
                Per Page:{" "}
              </h6>
              <input
                type="text"
                className="w-14 h-6 outline-none border-2 border-[#E7E6EF] pl-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <h6 className="font-lato font-[400px] text-[16px] text-[#3F509E]">
                Sort By:{" "}
              </h6>
              <select
                name=""
                id=""
                className="bg-transparent font-lato font-[400px] text-[12px] text-[#8A8FB9] w-24 h-7 outline-none border-2 border-[#E7E6EF] px-2"
              >
                <option value="" className="bg-white">
                  Best Matches
                  <FaAngleDown />
                </option>
                <option value="" className="bg-white">
                  Most Discount
                  <FaAngleDown />
                </option>
                <option value="" className="bg-white">
                  Top Rated
                  <FaAngleDown />
                </option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <h6 className="font-lato font-[400px] text-[16px] text-[#3F509E]">
                View:{" "}
              </h6>
              <BiSolidGridAlt />
              <FaListUl />
              <input
                type="text"
                className="w-40 h-7 outline-none border-2 border-[#E7E6EF] ml-10 pl-2"
              />
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className="flex pt-36 justify-between">
          <div className="w[15%]">
            <div className="pb-3">
              <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                Product Category
              </h3>
              {category.map((categories, index) => (
                <div
                  className="flex items-center gap-2"
                  key={`category-${index}`}
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" onChange={() => handleCategoryChange(categories)} checked={selectedCategories.includes(categories)} className="cursor-pointer accent-primary" />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      {categories}
                    </p>
                  </label>
                </div>
              ))}
            </div>
            <div className="pt-16 pb-3">
              <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                Product Price
              </h3>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    className="cursor-pointer accent-primary"
                  />
                  <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                    $0.1 - $100.0
                  </p>
                </label>
              </div>
            </div>

            <div className="pt-16 pb-3">
              <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                Discount Offer
              </h3>
              <div className="">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    className="cursor-pointer accent-primary"
                  />
                  <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                    1% - $10%
                  </p>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    className="cursor-pointer accent-primary"
                  />
                  <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                    11% - $20%
                  </p>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    className="cursor-pointer accent-primary"
                  />
                  <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                    21% - $30%
                  </p>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    className="cursor-pointer accent-primary"
                  />
                  <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                    31% - $40%
                  </p>
                </label>
              </div>
            </div>
            <div className="pt-16 pb-3">
              <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                Product Brand
              </h3>
              {brands.map((brand, index) => (
                <div className="flex items-center gap-2" key={`brand-${index}`}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox" onChange={()=>handleBrandChange(brand)} checked={selectedBrands.includes(brand)}
                      name=""
                      className="cursor-pointer accent-primary"
                    />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      {brand}
                    </p>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[80%] flex flex-wrap justify-between items-center">
            {filteredProducts.length > 0
              ? filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="w-[23%] mb-10 pb-5 hover:shadow-lg group"
                  >
                    <div className="relative">
                      <div className="bg-[#F6F7FB] px-10 py-10 transition-all duration-300 group-hover:bg-[#EBF4F3]">
                        <img
                          src={item.thumbnail}
                          alt="Products Image"
                          className="w-48 h-48"
                        />
                      </div>
                      <div className="absolute bottom-2 left-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                          <FiShoppingCart />
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                          <FaRegHeart />
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                          <FiZoomIn />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-josef font-semibold text-secondery text-[16px] pt-5 text-center">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-center">
                      <GoDotFill className="rounded-full text-[#DE9034] text-[20px]" />
                      <GoDotFill className="rounded-full text-primary text-[20px]" />
                      <GoDotFill className="rounded-full text-[#8568FF] text-[20px]" />
                    </div>
                    <div className="flex items-center justify-center gap-2 font-josef font-[400px] text-[14px]">
                      <p className="text-secondery">
                        $
                        {(
                          item.price -
                          item.price * (item.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                      <p className="text-primary line-through">${item.price}</p>
                    </div>
                  </div>
                ))
              : data.map((item) => (
                  <div
                    key={item.id}
                    className="w-[23%] mb-10 pb-5 hover:shadow-lg group"
                  >
                    <div className="relative">
                      <div className="bg-[#F6F7FB] px-10 py-10 transition-all duration-300 group-hover:bg-[#EBF4F3]">
                        <img
                          src={item.thumbnail}
                          alt="Products Image"
                          className="w-48 h-48"
                        />
                      </div>
                      <div className="absolute bottom-2 left-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                          <FiShoppingCart />
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                          <FaRegHeart />
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
                          <FiZoomIn />
                        </div>
                      </div>
                    </div>
                    <h4 className="font-josef font-semibold text-secondery text-[16px] pt-5 text-center">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-center">
                      <GoDotFill className="rounded-full text-[#DE9034] text-[20px]" />
                      <GoDotFill className="rounded-full text-primary text-[20px]" />
                      <GoDotFill className="rounded-full text-[#8568FF] text-[20px]" />
                    </div>
                    <div className="flex items-center justify-center gap-2 font-josef font-[400px] text-[14px]">
                      <p className="text-secondery">
                        $
                        {(
                          item.price -
                          item.price * (item.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                      <p className="text-primary line-through">${item.price}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="pt-24 pb-20 flex justify-center">
          <img src={WaterMark} alt="Water Mark Image" />
        </div>
      </div>
    </section>
  );
};

export default Products;
