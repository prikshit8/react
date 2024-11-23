import { useEffect, useState } from "react";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const responseObj = await fetch("https://dummyjson.com/products");
        const data = await responseObj.json();
        setProducts(data.products);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      {products.map((product) => (
        <div>{product.title}</div>
      ))}
    </div>
  );
};

export default Search;
