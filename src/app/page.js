import Categories from "./components/Categories";
import HomeProducts from "./components/HomeProducts";
import Search from "./components/Search";

const fetchData = () => {
  const result = fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  return result;
};

export default async function Home() {
  const { products } = await fetchData();
  const featured = [];
  for (let i = 0; i < 3; i++) {
    let x = Math.round(Math.random() * products.length - 1);
    featured.push(products[x]);
  }
  return (
    <div>
      <Search />
      <Categories />
      <HomeProducts/>
    </div>
  );
}
