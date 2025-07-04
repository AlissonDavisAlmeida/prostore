import { Button } from "@/components/ui/button";
import { ModeToogle } from "./mode-toogle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Menu() {
    return (
        <div
            className="flex justify-end gap-3"
        >
            <nav className="hidden md:flex w-full max-w-xs gap-1">
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
            </nav>
            <nav
                className="md:hidden"
            >
                <Sheet >
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start p-6">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToogle />
                        <Button asChild variant="ghost">
                            <Link href="/cart">
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
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}
