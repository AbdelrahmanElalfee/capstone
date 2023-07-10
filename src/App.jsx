import CategoriesContainer from "./components/categories-container/CategoriesContainer.component.jsx";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      img: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "Jackets",
      img: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Sneakers",
      img: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "Women",
      img: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "Men",
      img: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ];
  return (
    <CategoriesContainer categories={categories} />
  )
}

export default App
