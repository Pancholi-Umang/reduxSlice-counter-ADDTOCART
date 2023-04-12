import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/ProductSlice";
import { addCart } from "../redux/cartSlice";
import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const Selectproduct = useSelector((state) => state.product.data); 
  const status = useSelector((state) => state.product.status); 

  
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  
  const addTOCart = (product) => {
    dispatch(addCart(product));
  };
  
    if(status === "loading"){
      return <h2 className="text-center mt-5"> Loading... </h2>;
    }else if(status === "error"){
      return <h2 className="text-center text-danger">Error...</h2>
    }
  
  return (
    <div className="container">
      <div className="container-fluid mt-5 d-flex justify-content-center">
        <h1 className="w-100">Add-To-Cart Using Redux-Slice</h1>
        <Navbar />
      </div>

      <div className="row d-xs-flex align-items-center justify-content-center my-5 g-4">
        {Selectproduct.map((vals, index) => {
          return (
            <div className=" col-lg-3 col-md-4 col-sm-6 col-10" key={index}>
              <div className="card">
                <img
                  src={vals.image}
                  className="card-img-top makeImage"
                  alt="IMAGE_ERROR"
                />
                <div className="card-body card-bodys">
                  {" "}
                  <h6 className="card-title">{vals.title}</h6>{" "}
                </div>
                <p className="text-center">{vals.category}</p>
                <button className="border-0" onClick={() => addTOCart(vals)}>
                  {" "}
                  add cart{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
