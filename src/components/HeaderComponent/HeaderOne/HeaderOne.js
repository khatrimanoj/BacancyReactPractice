import React, { Component } from "react";
// import PropTypes from "prop-types";
import Menu from "../Menu";

class list extends Component {
  //   static propTypes = {
  //     Headerlogo: PropTypes.string.isRequired,
  //     menu: PropTypes.array.isRequired,
  //     Background: PropTypes.string.isRequired,
  //   };
  constructor() {
    super();
  }
  render() {
    const { Headerlogo, HeaderBrand, menu, Background, thamecolor, button } =
      this.props;
    const font = `
          header-one
          ${thamecolor === "white" && "white"}


        `;
    return (
      <header
        className={font + Background}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="logo">
          {HeaderBrand ? (
            <h1>{HeaderBrand}</h1>
          ) : (
            <img src={Headerlogo} alt="brand name" />
          )}
        </div>
        <Menu menu={this.props.menulink}>
          <li>
            <div className="header-btn pull-right">
              <button className={["pull-right " + button]}>
                {" "}
                <span>Download</span>
              </button>
            </div>
          </li>
        </Menu>
      </header>
    );
  }
}

export default list;
