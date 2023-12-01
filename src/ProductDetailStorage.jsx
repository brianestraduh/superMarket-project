import { useOutletContext } from "react-router-dom"

export default function ProductDetailStorage() {
    const product = useOutletContext().storage;
    return (
        <p>
  <strong>Storage instructions:</strong> {product}
</p>
    )
}