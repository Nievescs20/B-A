export const links = [
  {
    name: "Home",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Store",
    submenu: true,
    sublinks: [
      {
        Head: "Store",
        sublink: [
          { name: "Presets", link: "/" },
          { name: "Luts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "My Work",
    submenu: true,
    sublinks: [
      {
        Head: "My Work",
        sublink: [
          { name: "Photography", link: "/" },
          { name: "Videography", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Contact Me",
    submenu: false,
    sublinks: [],
  },
];
