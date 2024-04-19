import React from "react";
import classes from "./ProductHomePage.module.scss";
const ProductHomePage = () => {
  const [data, setData] = React.useState([]);

  const getData = () => {
    fetch(`http://localhost:3001/product`)
      .then((data) => data.json())
      .then((res) => {
        setData(res.items);
        console.log("res", res);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className={classes.categoryMain}>
        {data.map((item, i) => (
          <div className={classes.categoryBox} key={i}>
            <img width="160px" src={item.image} alt={item?.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHomePage;
