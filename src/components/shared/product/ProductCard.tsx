import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Product } from "@/db/sample-data"
import Image from "next/image"
import Link from "next/link"
import { ProductPrice } from "./ProductPrice"

type ProductCardProps = {
    product: Product
}

export const Productcard = ({ product }: ProductCardProps) => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/product/${product.slug}`}>

                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4 rounded"
                        width={300}
                        height={300}
                        priority
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium mb-2">{product.name}</h2>
                </Link>
                <div className="flex-between gap-4">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice value={product.price} />
                    ) : (
                        <p className="text-destructive">
                            Out of Stock
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
