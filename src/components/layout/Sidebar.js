export default function Sidebar(props) {
  const sidebarList = [
    {
      id: 1,
      title: "Installation",
      url: "#installation",
    },
    {
      id: 2,
      title: "Banner Component",
      url: "#bannerComponent",
    },
    {
      id: 3,
      title: "Button Component",
      url: "#buttonComponent",
    },
    {
      id: 4,
      title: "Form Component",
      url: "#formComponent",
    },
    {
      id: 5,
      title: "Nabar Component",
      url: "#navbarComponent",
    },
  ];
  const listItem = sidebarList.map((items, i) => (
    <li key={i}>
      <a href={items.url}>{items.title}</a>
    </li>
  ));
  return (
    <>
      <aside>
        <div className="brand">
          <h2>React Components</h2>
        </div>
        <div className="sidebar">
          <ul>{listItem}</ul>
        </div>
      </aside>
    </>
  );
}
