import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
const URL = "http://localhost:3000/pizzas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      editPizza: {}
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas }));
  }

  editPizza = pizza => {
    let editedPizza = Object.assign({}, pizza);
    this.setState({ editPizza: editedPizza });
  };

  // submitEdit = za => {
  //   let pizzas = this.state.pizzas.slice();
  //   let foundPizza = this.state.pizza.find(pizza => {
  //     return pizza.id === za.id;
  //   });
  //   pizzas[pizzas.indexOf(foundPizza)].topping = za.topping;
  //   pizzas[pizzas.indexOf(foundPizza)].topping = za.topping;
  //   pizzas[pizzas.indexOf(foundPizza)].topping = za.topping;

  //   this.setState({ pizzas });
  // };

  commitEdit = () => {
    let currentPizzaIndex = this.state.pizzas.map(pizza => pizza.id);
    let currentPizzas = this.state.pizzas.slice();
    currentPizzas[
      currentPizzaIndex.indexOf(this.state.editPizza.id)
    ] = Object.assign({}, this.state.editPizza);

    this.setState({ pizzas: currentPizzas, editPizza: {} });
  };

  handleSizeEdit = event => {
    event.persist();
    let newPizza = this.state.editPizza;
    newPizza.size = event.target.value;
    this.setState({ editPizza: newPizza });
  };

  handleToppingEdit = event => {
    event.persist();
    let newPizza = this.state.editPizza;
    newPizza.topping = event.target.value;
    this.setState({ editPizza: newPizza });
  };

  handleVegetarianEdit = event => {
    event.persist();
    let newPizza = this.state.editPizza;
    newPizza.vegetarian = event.target.value === "Vegetarian" ? true : false;
    this.setState({ editPizza: newPizza });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          submitEdit={this.submitEdit}
          editPizza={this.state.editPizza}
          handleSizeEdit={this.handleSizeEdit}
          handleToppingEdit={this.handleToppingEdit}
          handleVegetarianEdit={this.handleVegetarianEdit}
          commitEdit={this.commitEdit}
        />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
