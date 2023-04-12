import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const Selectproduct = useSelector((state) => state.cart.cartItems);
  const deleteItem = (value) => {
    const filteredData = Selectproduct.filter((item) => item.id !== value.id);
    dispatch(deleteRecord(filteredData)) 
  }
  return (
    <>
      <div className="container">
        <h1 className="mt-3 text-center">Add to cart in ReduxSlice</h1>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-around">
          {Selectproduct.map((values, index) => {
            return (
              <div className="card my-3 col-md-5 col-sm-12" key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={values.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{values.title}</h5>
                      <p className="card-text">{values.description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <button className="btn btn-sm btn-danger" onClick={()=>deleteItem(values)}>DELETE</button>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
