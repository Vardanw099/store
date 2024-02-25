import Categoryselect from "./Categoryselect";

export default async function Categories() {
  const categories = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());
  
  return (
    <div>
      <Categoryselect categories={categories} />
    </div>
  );
}
