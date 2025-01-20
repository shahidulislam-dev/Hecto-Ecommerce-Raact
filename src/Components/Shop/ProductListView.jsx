import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaListUl } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { apiData } from "../ContextApi";
import WaterMark from "../../assets/watermark.png";
import { FiZoomIn, FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Banner from '../ComponentCommon/Banner'
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";

const ProductListView = () => {
  const data = useContext(apiData);
  const [category, setCategory] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedDiscountRange, setSelectedDiscountRange] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("id");

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

      const priceMatch =
        selectedPriceRange.length === 0 ||
        selectedPriceRange.some(
          (range) => item.price >= range.min && item.price <= range.max
        );
      const dicountMatch =
        selectedDiscountRange.length === 0 ||
        selectedDiscountRange.some(
          (range) => item.discountPercentage >= range.min && item.discountPercentage <= range.max
        );

      return categoryMatch && brandMatch && priceMatch && dicountMatch;
    });

    let sortedProducts = [...filtered];
    if (sortBy === "id") {
      sortedProducts
    } else if (sortBy === "mostDiscount") {
      sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else if (sortBy === "topRated") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "aToZ") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "zToA") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(sortBy ? sortedProducts : filtered);

  }, [data, selectedCategories, selectedBrands, selectedPriceRange, selectedDiscountRange, sortBy]);


  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceFilter = (min, max) => {
    const isSelected = selectedPriceRange.some(
      (range) => range.min === min && range.max === max
    );

    if (isSelected) {
      setSelectedPriceRange((prev) =>
        prev.filter((range) => range.min !== min || range.max !== max)
      );
    } else {
      setSelectedPriceRange((prev) => [...prev, { min, max }]);
    }
  };


  const handleDiscountFilter = (min, max) => {
    const isSelected = selectedDiscountRange.some(
      (range) => range.min === min && range.max === max
    );

    if (isSelected) {
      setSelectedDiscountRange((prev) =>
        prev.filter((range) => range.min !== min || range.max !== max)
      );
    } else {
      setSelectedDiscountRange((prev) => [...prev, { min, max }]);
    }
  };

  let [catShow, setCatShow] = useState(true);
  const handleCatShow = () => {
    setCatShow(!catShow)
  }
  let [brandShow, setBrandShow] = useState(true);
  const handleBrandShow = () => {
    setBrandShow(!brandShow)
  }



  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <IoMdStar key={`full-${index}`} className="text-yellow-500 text-sm" />
        ))}
        {halfStar && <IoMdStarHalf className="text-yellow-500 text-sm" />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <IoMdStarOutline key={`empty-${index}`} className="text-yellow-500 text-sm" />
        ))}
      </>
    );
  };


  return (
    <>
      <Banner title="Shop List" name="Shop List" />
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
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-lato font-[400px] text-[12px] text-[#8A8FB9] w-24 h-7 outline-none border-2 border-[#E7E6EF] px-2"
                >
                  <option value="id">Product Id</option>
                  <option value="aToZ">A-Z</option>
                  <option value="zToA">Z-A</option>
                  <option value="mostDiscount">Most Discount</option>
                  <option value="topRated">Top Rated</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <h6 className="font-lato font-[400px] text-[16px] text-[#3F509E]">
                  View:{" "}
                </h6>
                <Link to="/shop"><BiSolidGridAlt /></Link>
                <FaListUl />
                <input
                  type="text"
                  className="w-40 h-7 outline-none border-2 border-[#E7E6EF] ml-10 pl-2"
                />
              </div>
              <div className=""></div>
            </div>
          </div>

          <div className="flex pt-28 justify-between">
            <div className="w[15%]">
              <div className="pb-3">
                <h3 onClick={handleCatShow} className="font-josef font-semibold text-secondery text-[20px] underline flex items-center gap-2 cursor-pointer">
                  Product Category<IoMdArrowDropdown className="text-secondery text-[30px] cursor-pointer" />
                </h3>

                {category.map((categories, index) => (
                  <div
                    className="flex items-center gap-2"
                    key={`category-${index}`}
                  >
                    {catShow && (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          onChange={() => handleCategoryChange(categories)}
                          checked={selectedCategories.includes(categories)}
                          className="cursor-pointer accent-primary"
                        />
                        <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                          {categories}
                        </p>
                      </label>
                    )}
                  </div>
                ))}
              </div>
              <div className="pt-10 pb-3">
                <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                  Product Price
                </h3>
                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handlePriceFilter(0, 100)}
                      checked={selectedPriceRange.some(
                        (range) => range.min === 0 && range.max === 100
                      )} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">$0.00 - $100.00</p>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handlePriceFilter(100.01, 200)}
                      checked={selectedPriceRange.some(
                        (range) => range.min === 100.01 && range.max === 200
                      )} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">$100.01 - $200.00</p>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handlePriceFilter(200.01, 500)}
                      checked={selectedPriceRange.some(
                        (range) => range.min === 200.01 && range.max === 500
                      )} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">$200.01 - $500.00</p>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handlePriceFilter(500.01, 1000)}
                      checked={selectedPriceRange.some(
                        (range) => range.min === 500.01 && range.max === 1000
                      )} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">$500.01 - $1000.00</p>
                  </label>
                </div>
              </div>

              <div className="pt-10 pb-3">
                <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                  Discount Offer
                </h3>
                <div className="">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handleDiscountFilter(0.01, 5)} checked={selectedDiscountRange.some((range) => range.min === 0.01 && range.max === 5)} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      0.01% - $5%
                    </p>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handleDiscountFilter(5.01, 10)} checked={selectedDiscountRange.some((range) => range.min === 5.01 && range.max === 10)} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      5.01% - $10%
                    </p>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" onChange={() => handleDiscountFilter(10.01, 15)} checked={selectedDiscountRange.some((range) => range.min === 10.01 && range.max === 15)} className="cursor-pointer accent-primary" />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      10.01% - $15%
                    </p>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handleDiscountFilter(15.01, 20)} checked={selectedDiscountRange.some((range) => range.min === 15.01 && range.max === 20)} />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      15.01% - $20%
                    </p>
                  </label>

                </div>
              </div>
              <div className="pt-10 pb-3">
                <h3 onClick={handleBrandShow} className="font-josef font-semibold text-secondery text-[20px] underline flex items-center gap-2 cursor-pointer">
                  Product Brand<IoMdArrowDropdown className="text-secondery text-[30px] cursor-pointer" />
                </h3>
                {brands.map((brand, index) => (
                  <div className="flex items-center gap-2" key={`brand-${index}`}>
                    {brandShow &&
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          onChange={() => handleBrandChange(brand)}
                          checked={selectedBrands.includes(brand)}
                          name=""
                          className="cursor-pointer accent-primary"
                        />
                        <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                          {brand}
                        </p>
                      </label>
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[80%] flex flex-wrap justify-between items-start">
              {filteredProducts.length > 0
                ? filteredProducts.map((item) => (
                  <div key={item.id} className="mb-5 pb-5 w-full">
                    <div className="flex items-center justify-between p-5 shadow-shadowArround bg-white">
                      <div className="w-[20%] bg-[#F6F7FB] flex items-center justify-center p-2">
                        <img
                          src={item.thumbnail}
                          alt="Products Image"
                          className="w-44 h-40"
                        />
                      </div>
                      <div className="w-[75%]">
                        <div className="flex items-center gap-10">
                          <h4 className="font-josef font-semibold text-secondery text-[16px] pt-5 text-center">
                            {item.title}
                          </h4>
                          <div className="flex items-center pt-5">
                            <GoDotFill className="rounded-full text-[#DE9034] text-[20px]" />
                            <GoDotFill className="rounded-full text-primary text-[20px]" />
                            <GoDotFill className="rounded-full text-[#8568FF] text-[20px]" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-josef font-[400px] text-[14px] pt-3">
                          <p className="text-secondery">${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}</p>
                          <p className="text-primary line-through">${item.price}</p>
                          <div className="flex items-center gap-1 pb-1">
                            {renderStars(item.rating)}
                            <span className="text-gray-500">
                              ({item.rating})
                            </span>
                          </div>
                        </div>
                        <p className="font-lato font-[400px] text-[#9295AA] text-[14px] w-[70%] pt-3">{item.description}</p>
                        <div className="flex gap-5 pt-5">
                          <div className="flex justify-center items-center w-8 h-8 rounded-full text-[#535399] text-[20px] hover:bg-white hover:shadow-lg"><FiShoppingCart /></div>
                          <div className="flex justify-center items-center w-8 h-8 rounded-full text-[#535399] text-[20px] hover:bg-white hover:shadow-lg"><FaRegHeart /></div>
                          <div className="flex justify-center items-center w-8 h-8 rounded-full text-[#535399] text-[20px] hover:bg-white hover:shadow-lg"><FiZoomIn /></div>
                        </div>
                      </div>

                    </div>


                  </div>
                ))
                : data.map((item) => (
                  <div
                    key={item.id}
                    className="w-[23%] mb-5 pb-5"
                  >
                    <div className="flex items-center p-5 shadow-shadowArround bg-white">
                      <div className="w-[20%]">
                        <img
                          src={item.thumbnail}
                          alt="Products Image"
                          className="w-44 h-40"
                        />
                      </div>
                      <div className="w-[78%]">
                        <div className="flex items-center gap-10">
                          <h4 className="font-josef font-semibold text-secondery text-[16px] pt-5 text-center">
                            {item.title}
                          </h4>
                          <div className="flex items-center pt-5">
                            <GoDotFill className="rounded-full text-[#DE9034] text-[20px]" />
                            <GoDotFill className="rounded-full text-primary text-[20px]" />
                            <GoDotFill className="rounded-full text-[#8568FF] text-[20px]" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 font-josef font-[400px] text-[14px] pt-3">
                          <p className="text-secondery">${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}</p>
                          <p className="text-primary line-through">${item.price}</p>
                          <div className="flex items-center gap-1 pb-1">
                            {renderStars(item.rating)}
                            <span className="text-gray-500">
                              ({item.rating})
                            </span>
                          </div>
                        </div>
                        <p className="font-lato font-[400px] text-[#9295AA] text-[14px] pt-3">{item.description}</p>
                        <div className="flex gap-5 pt-5">
                          <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white hover:shadow-lg"><FiShoppingCart /></div>
                          <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white hover:shadow-lg"><FaRegHeart /></div>
                          <div className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white hover:shadow-lg"><FiZoomIn /></div>
                        </div>
                      </div>
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
    </>
  )
}

export default ProductListView

