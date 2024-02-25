import Products from "@/app/components/Products";
import Search from "@/app/components/Search";

export default async function SearchPage({ params }) {
  const result = await fetch(
    `https://dummyjson.com/products/search?q=${params.searchText}`
  ).then((res) => res.json());
  const { products } = result;
  return (
    <>
      <Search value={params.searchText} />
      <Products products={products} />
    </>
  );
}
