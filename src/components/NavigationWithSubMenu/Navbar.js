import MenuItems from "./MenuItems";
const Navbar = () => {
  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
      submenu: [
        {
          title: "web design",
          url: "web-design",
        },
        {
          title: "web development",
          url: "web-dev",
          submenu: [
            {
              title: "Frontend",
              url: "frontend",
            },
            {
              title: "Backend",
              submenu: [
                {
                  title: "NodeJS",
                  url: "node",
                },
                {
                  title: "PHP",
                  url: "php",
                },
              ],
            },
          ],
        },
        {
          title: "SEO",
          url: "seo",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
      submenu: [
        {
          title: "Who we are",
          url: "who-we-are",
        },
        {
          title: "Our values",
          url: "our-values",
        },
      ],
    },
  ];
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
