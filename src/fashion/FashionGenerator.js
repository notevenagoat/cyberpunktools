import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { shuffleArrayCopy } from "../randomgen";

const clothingStyles = [
  "Bag Lady Chic",
  "Gang Colors",
  "Generic Chic",
  "Bohemian",
  "Leisurewear",
  "Nomad Leathers",
  "Asia Pop",
  "Urban Flash",
  "Businesswear",
];

const generateSeason = () => {
  return shuffleArrayCopy([...clothingStyles]).slice(0, 7);
};

export class FashionGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { seasons: [] };
    this.seasonsJSX = this.seasonsJSX.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  seasonsJSX = () => {
    console.log("test");
    return this.state.seasons.map((season, i) => {
      return (
        <div>
          <tr>
            <td>{i + 1}</td>
            {season.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </div>
      );
    });
  };

  addHandler = () => {
    console.log("addHandler");
    this.setState({ seasons: [...this.state.seasons, generateSeason()] });
  };

  clearHandler = () => {
    this.setState({ seasons: [] });
  };

  render() {
    return (
      <React.Fragment>
        {/* className="table table-dark table-striped border-danger m-3" */}
        {/* style="max-width: 95%;" */}
        <h1>Fashion Generator</h1>
        <Table striped variant="dark border-danger">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bottoms</th>
              <th scope="col">Top</th>
              <th scope="col">Jacket</th>
              <th scope="col">Footwear</th>
              <th scope="col">Jewelry</th>
              <th scope="col">Hat</th>
              <th scope="col">Eyewear</th>
            </tr>
          </thead>
          <tbody id="fashionTable">{this.seasonsJSX()}</tbody>
        </Table>
        <div>
          {/* class="btn btn-dark" */}
          <Button
            variant="dark m-1"
            type="button"
            onClick={this.addHandler}
            id="add-season"
          >
            Add season
          </Button>
          <Button
            variant="dark"
            type="button"
            onClick={this.clearHandler}
            id="clear-btn"
          >
            Clear
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default FashionGenerator;
