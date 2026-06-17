import { useEffect, useState } from "react";
import { Loader } from "./Loader";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.recipes);
        setData(response.recipes);
      });
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((e,index) => (
            <img key={index} style={{ width: "250px" }} src={e.image} />
          ))}
        </>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default Products;
