import { cn } from "@/lib/utils";

type ProductPriceProps = {
  value: number;
  className?: string;
}


export const ProductPrice = ({ className, value }: ProductPriceProps) => {


  const stringValue = value.toFixed(2)

  const [integerPart, decimalPart] = stringValue.split('.')

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      <span className="font-semibold">{integerPart}</span>
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  )
}
