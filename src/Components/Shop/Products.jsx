import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaListUl } from "react-icons/fa";
import { BiSolidGridAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { apiData } from "../ContextApi";
import WaterMark from "../../assets/watermark.png";
import { FiZoomIn, FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, productDetails } from "../Slices/CartSlice";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
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
      const discountMatch =
        selectedDiscountRange.length === 0 ||
        selectedDiscountRange.some(
          (range) => item.discountPercentage >= range.min && item.discountPercentage <= range.max
        );

      return categoryMatch && brandMatch && priceMatch && discountMatch;
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

  }, [selectedCategories, selectedBrands, selectedPriceRange, selectedDiscountRange, sortBy]);


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

  const priceRanges = [
    { min: 0, max: 100, label: "$0.00 - $100.00" },
    { min: 100.01, max: 200, label: "$100.01 - $200.00" },
    { min: 200.01, max: 500, label: "$200.01 - $500.00" },
    { min: 500.01, max: 1000, label: "$500.01 - $1000.00" },
  ];

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


  const discountRanges = [
    { min: 0, max: 5, label: "$0.00 - $5.00" },
    { min: 5.01, max: 10, label: "$5.01 - $10.00" },
    { min: 10.01, max: 15, label: "$10.01 - $15.00" },
    { min: 15.01, max: 20, label: "$15.01 - $20.00" },
  ];
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


  // Pagination Section

  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(12);

  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;

  let totalPages = Math.ceil((filteredProducts.length > 0 ? filteredProducts.length : data.length) / perPage);
  let currentPageProducts = (filteredProducts.length > 0 ? filteredProducts : data).slice(firstItemIndex, lastItemIndex);

  let pages = [];
  let pagesData = filteredProducts.length > 0 ? filteredProducts : data;

  for (let i = 1; i <= Math.ceil(pagesData.length / perPage); i++) {
    pages.push(i);
  }


  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }

  }
  const handlePrevPage = () => {
    if (currentPage > 1 || currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleSpecificPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  const handlePerPage = (e) => {
    setPerPage(e.target.value || 12)
  }

 
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));
  }

  const handleProductDetail = (product) => {
    dispatch(productDetails(product));
  }


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
                type="text" onChange={handlePerPage}
                className="w-14 h-6 outline-none border-2 border-[#E7E6EF] pl-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <h6 className="font-lato font-[400px] text-[16px] text-[#3F509E]"></h6>
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
              <BiSolidGridAlt />
              <Link to="/shop-list"><FaListUl /></Link>
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
                {priceRanges.map((range, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-primary"
                      onChange={() => handlePriceFilter(range.min, range.max)}
                      checked={selectedPriceRange.some(
                        (selectedRange) =>
                          selectedRange.min === range.min &&
                          selectedRange.max === range.max
                      )}
                    />
                    <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                      {range.label}
                    </p>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-10 pb-3">
              <h3 className="font-josef font-semibold text-secondery text-[20px] underline">
                Discount Offer
              </h3>
              {discountRanges.map((range, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="cursor-pointer accent-primary" onChange={() => handleDiscountFilter(range.min, range.max)} checked={selectedDiscountRange.some((selectedRange) => selectedRange.min === range.min && selectedRange.max === range.max)} />
                  <p className="font-lato font-[400px] text-[16px] text-[#7E81A2]">
                    {range.label}
                  </p>
                </label>
              ))}

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
          <div className="w-[80%]">
            <div className="flex flex-wrap justify-between items-start">
              {currentPageProducts.map(
                (item) => (
                  <div key={item.id} className="w-[23%] mb-10 pb-5 hover:shadow-lg group" >
                    <div className="relative overflow-hidden group">
                      <Link to={`/product-details/${(item.title).replaceAll(' ', '_')}`} onClick={() => handleProductDetail(item)}><div className="bg-[#F6F7FB] px-10 py-10 transition-all duration-300 group-hover:bg-[#EBF4F3]">
                        <img src={item.thumbnail} alt="Products Image" className="w-48 h-48" />
                      </div></Link>
                      <div className="absolute bottom-2 left-2 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <div onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }} className="flex justify-center items-center w-8 h-8 rounded-full text-secondery text-[20px] hover:bg-white">
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

                    <Link to={`/product-details/${(item.title).replaceAll(' ', '_')}`} onClick={() => handleProductDetail(item)}><div className="">
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
                    </div></Link>
                  </div>
            )
              )}
          </div>
          <div className="flex gap-2 justify-center text-secondery pt-10">
            <button className="px-4 py-2 border-2 text-secondery" onClick={handlePrevPage}>
              Previous
            </button>
            {pages.map((pageNumber) => (
              <button key={pageNumber} className={`px-4 py-2 border-2 ${currentPage === pageNumber
                ? "bg-primary text-white"
                : "text-secondery"
                }`}
                onClick={() => handleSpecificPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            <button className="px-4 py-2 border-2 text-secondery" onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>

      </div>
      <div className="pt-24 pb-20 flex justify-center">
        <img src={WaterMark} alt="Water Mark Image" />
      </div>
    </div>
    </section >
  );
};

export default Products;
