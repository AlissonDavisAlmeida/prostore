import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import { ShoppingCartIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToogle } from "./mode-toogle"


export const Header = () => {
    return (
        <header
            className="w-full border-b"
        >
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link
                        href={`/`}
                        className="flex-start"
                    >
                        <Image
                            src={`/images/logo.svg`}
                            alt={`${APP_NAME} logo`}
                            height={48}
                            width={48}
                            priority={true}
                        />
                        <span
                            className="hidden font-bold text-2xl ml-3 lg:block"
                        >
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <div
                    className="space-x-2"
                >
                    <ModeToogle 
                    
                    />
                    <Button
                        asChild
                        variant="ghost"
                    >
                        <Link
                            href="/cart"
                        >
                            <ShoppingCartIcon /> Cart
                        </Link>
                    </Button>
                    <Button
                        asChild
                    >
                        <Link
                            href="/sign-in"
                        >
                            <UserIcon /> Sign In
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
