import "../product/product.css";


const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle p-circle-1"></div>
        <div className="p-circle  p-circle-2"></div>
        <div className="p-circle p-circle-3"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
