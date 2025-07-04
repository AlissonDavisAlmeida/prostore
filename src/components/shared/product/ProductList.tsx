import { Product } from "@/db/sample-data"
import { Productcard } from "./ProductCard"

type ProductListProps = {
    data: Product[]
    title?: string
    limit?: number
}

export const ProductList = ({ data, title, limit }: ProductListProps) => {

    const limitedData = limit ? data.slice(0, limit) : data;

    return (
        <div
            className="my-10"
        >
            <h2 className="h2-bold mb-4">{title}</h2>
            {data.length > 0 ? (
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {limitedData.map((product) => (
                        <Productcard
                            key={product.slug}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <p>No products found</p>
                </div>
            )}
        </div>
    )
}
