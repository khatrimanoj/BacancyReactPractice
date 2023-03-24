import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsxData: [],
      submenu: [],
    };
  }
  componentDidMount() {
    this.setState({ jsxData: this.createMenuJSX() });
  }

  menuClickEvent(i) {
    let submenu = this.state.submenu;
    let tmpmenu = submenu[i];
    let sub = tmpmenu.sub.current;
    let caret = tmpmenu.caret.current;

    if (tmpmenu.active === false) {
      tmpmenu.active = true;
    } else {
      tmpmenu.active = false;
    }

    submenu[i] = tmpmenu;

    this.setState({ submenu: submenu });
  }
  createMenuJSX(menu = this.props.menu) {
    let link = [];

    for (let i in menu) {
      let m = menu[i];

      if (typeof m.menu === "undefined") {
        link.push(
          <li>
            <a href={m.link}>
              <span>{i}</span>
            </a>
          </li>
        );
      } else if (typeof m.menu === "object") {
        let tmpSubmenu = this.state.submenu;
        let tmpLength = tmpSubmenu.length;

        tmpSubmenu.push({
          id: m.link,
          active: false,
          caret: React.createRef(),
          sub: React.createRef(),
        });

        link.push(
          <li className="submenu-arrow" ref={tmpSubmenu[tmpLength].caret}>
            <a
              href={m.link}
              onClick={this.menuClickEvent.bind(this, tmpLength)}
            >
              <span>{i}</span>
            </a>
            <ul className="menubar-sub-ul" ref={tmpSubmenu[tmpLength].sub}>
              {this.createMenuJSX(m.menu)}
            </ul>
          </li>
        );

        this.setState({ submenu: tmpSubmenu });
      }
    }

    return link;
  }
  render() {
    return (
      <nav className="menubar">
        <ul className="menubar-ul">
          {this.state.jsxData}
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

export default Menu;
