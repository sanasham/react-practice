import { useEffect, useState } from "react";

function PaginationComp() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      const custProducts = data.products;
      setProducts(custProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  //   console.log(products);

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">pagination</h1>
      {loading ? (
        <p>Loading ....</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {products?.slice(page * 10 - 10, page * 10).map((product) => (
            <div key={product.id} className="box-border p-4 border-4">
              <span>
                <img src={product.thumbnail} alt={product.title} className="" />
              </span>
              <li key={product.id} className="text-teal-700 text-center">
                {product.title}
              </li>
            </div>
          ))}
        </ul>
      )}
      {products.length > 0 ? (
        <div className="mt-6">
          <span className="p-4  mt-8 border-slate-500 cursor-pointer">👈</span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              className={
                page === i + 1
                  ? "bg-slate-700"
                  : "bg-slate-50" +
                    ` p-4 border border-solid mt-8 border-slate-500 cursor-pointer`
              }
              key={i}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          ))}

          <span className="p-4  mt-8 border-slate-500 cursor-pointer">👉</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PaginationComp;
