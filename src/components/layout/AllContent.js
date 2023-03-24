import { useState } from "react";
import bannerImage from "../../img/airlines.jpg";
import HeroBanner from "../Banner/HeroBanner";
import Button from "../Button/Button";
import Button1 from "../Button/Button1";
import Installation from "./Installation";
import Section from "./Section";
import HeaderOne from "../HeaderComponent/HeaderOne/HeaderOne";
import icon1 from "../../img/airlines.jpg";
import InputField from "../Input/InputField";

import Logo from "../../img/mindbox.svg";
import Header from "../NavigationWithSubMenu/Header";

const bannerContent = {
  bannerTitle: "Do What You Do",
  bannerSubTitle: "Focus on what you are doing, until it get done.",
  BannerButton: "Explore Now",
};

export default function AllContent() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const headerone = {
    About: {
      link: "#",
    },
    Features: {
      link: "#",
    },
    "Learn & Support": {
      link: "#",
    },
    "Compare Plans": {
      link: "#",
    },
  };

  const headertwo = {
    Shop: {
      link: "#",
      menu: {
        "Shop 1": {
          link: "#",
        },
        "Shop 2": {
          link: "#",
        },
        "Shop 3": {
          link: "#",
        },
      },
    },
    Blog: {
      link: "#",
    },
    About: {
      link: "#",
    },
    Contacts: {
      link: "#",
    },
  };

  return (
    <div className="main-content">
      <Section id="installation">
        <Installation />
      </Section>
      <Section id="bannerComponent">
        <HeroBanner className="mainBanner">
          <div className="bannerImage">
            <img src={bannerImage} alt="banner" />
          </div>
          <div className="bannerContent">
            <div className="container">
              {bannerContent.bannerTitle !== "" && (
                <h1>{bannerContent.bannerTitle}</h1>
              )}
              {bannerContent.bannerSubTitle !== "" && (
                <p>{bannerContent.bannerSubTitle}</p>
              )}
              {bannerContent.BannerButton !== "" && (
                <Button
                  type="button"
                  className="btn-primary"
                  onClick={() => alert("hy")}
                  style={{ marginBottom: "20px" }}
                >
                  {bannerContent.BannerButton}
                </Button>
              )}
            </div>
          </div>
        </HeroBanner>
      </Section>
      <Section id="buttonComponent">
        <div className="container">
          <h2 className="mb-3">Button Component</h2>

          <div className="row">
            <Button className="btn-primary">Primary</Button>
            <Button className="btn-secondary">Secondary</Button>
            <Button className="btn-outline">Outline</Button>
            <Button className="btn-disabled" disabled>
              Disabled
            </Button>
            <Button icon-="" className="btn btn-primary btn-icon">
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H20.4773"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9775 1L20.4775 7.5L13.9775 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Button + Icon
            </Button>
            <Button className="btn btn-primary btn-icon">
              Button + Icon
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H20.4773"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9775 1L20.4775 7.5L13.9775 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button className="btn btn-primary btn-icon">
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H20.4773"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9775 1L20.4775 7.5L13.9775 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button className="btn btn-outline btn-icon">
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5H20.4773"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9775 1L20.4775 7.5L13.9775 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

            <Button className="btn-primary btn-small">Small Button</Button>
            <Button className="btn-primary btn-medium">Medium Button</Button>
            <Button className="btn-primary btn-large">Large Button</Button>
          </div>

          <hr></hr>

          <h2 className="mb-3">Button Component with custom props</h2>
          <div className="row">
            <Button1 type="button" variants="primary" label="Default Button" />
            <Button1
              type="button"
              variants="primary"
              label="outline Button"
              className="btn-icon"
              icon={icon1}
              iconName="manoj"
              iconStyle={{ width: "20px", marginRight: "10px" }}
            />
            <Button1
              type="button"
              variants="primary"
              label="Icon End"
              className="btn-icon"
              icon={icon1}
              iconName="manoj"
              iconStyle={{ width: "20px", marginLeft: "10px" }}
              iconEnd={true}
            />
            <Button1
              type="button"
              variants="outline"
              icon={icon1}
              iconName="manoj"
              iconStyle={{ width: "20px" }}
              iconEnd={true}
            />
          </div>
        </div>
      </Section>
      <Section id="formComponent">
        <div className="container">
          <h2 className="mb-3">Form Component</h2>
          <div className="row mb-3">
            <div className="flex flex-column">
              <form onSubmit={handleSubmit}>
                <div className="form-content">
                  <InputField
                    type="text"
                    placeholder="Full Name"
                    label="Full Name"
                    name="fullName"
                    errorMessage="Username should be 3-16 characters and shouldn't include any special character!"
                    pattern="^[A-Za-z0-9]{3,16}$"
                    required={true}
                    value={values.name}
                    onChange={onChange}
                  />
                  <InputField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    name="email"
                    errorMessage="It should be a valid email address!"
                    value={values.name}
                    onChange={onChange}
                    required={true}
                  />
                  <InputField
                    type="password"
                    placeholder="Enter password"
                    label="Password"
                    name="password"
                    errorMessage="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                    value={values.name}
                    onChange={onChange}
                    pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                    required={true}
                  />
                  <InputField
                    type="password"
                    placeholder="Confirm password"
                    label="Confirm Password"
                    name="cpassword"
                    value={values.name}
                    onChange={onChange}
                    errorMessage="Passwords don't match!"
                    pattern={values.password}
                    required={true}
                  />
                  <InputField
                    type="textarea"
                    placeholder="Enter address"
                    label="Address"
                    name="address"
                    value={values.name}
                    onChange={onChange}
                  />
                  <InputField
                    type="text"
                    placeholder="Enter phone no."
                    label="Phone No."
                    name="phone"
                    value={values.name}
                    errorMessage="please enter phone No"
                    onChange={onChange}
                    required={true}
                    pattern="[0-9]{10}"
                  />
                  <div className="button">
                    <Button type="submit" className="btn-primary">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
      <Section id="navbarComponent">
        <div className="container">
          <HeaderOne
            HeaderBrand="Logo"
            // Headerlogo={Logo}
            menulink={headerone}
            button="btn btn-primary btn-sm"
          />
          <HeaderOne
            // HeaderBrand="Logo"
            Headerlogo={Logo}
            menulink={headertwo}
            button="btn btn-primary btn-sm"
          />
          <Header />
        </div>
      </Section>
    </div>
  );
}
