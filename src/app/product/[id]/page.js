
import SeeProd from "@/app/components/SeeProd";

export default async function SeeProduct({ params }) {
  const fetchData = () => {
    const result = fetch(`https://dummyjson.com/products/${params.id}`).then(
      (res) => res.json()
    );
    return result;
  };
  const product = await fetchData();
  console.log(product);
  return <SeeProd product={product} />;
}
