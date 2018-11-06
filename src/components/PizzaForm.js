import React from "react";

const PizzaForm = props => {
  const { editPizza } = props;
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={
            //Pizza Topping Should Go Here
            editPizza.topping
          }
          onChange={props.handleToppingEdit}
        />
      </div>
      <div className="col">
        <select
          value={editPizza.size}
          className="form-control"
          onChange={props.handleSizeEdit}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={editPizza.vegetarian}
            onChange={props.handleVegetarianEdit}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={!editPizza.vegetarian}
            onChange={props.handleVegetarianEdit}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={props.commitEdit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
