import Categories from "@/app/components/Categories";
import Products from "@/app/components/Products";
import Search from "@/app/components/Search";

export default async function CategoryValue({ params }) {
  const data = await fetch(
    `https://dummyjson.com/products/category/${params.value}`
  ).then((res) => res.json());
  const { products } = data;
  return (
    <div>
      <Search />
      <Categories />
      <Products products={products} />
    </div>
  );
}
