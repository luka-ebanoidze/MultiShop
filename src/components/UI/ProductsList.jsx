
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return data.length === 0 ? (
    <p style={{ marginBottom: 40 }}>Comming Soon...</p>
  ) : (
    data?.map((item, index) => <ProductCard item={item} key={index} />)
  );
};

export default ProductsList;
