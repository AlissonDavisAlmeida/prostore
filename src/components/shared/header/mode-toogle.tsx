'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export const ModeToogle = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, theme } = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    {
                        theme === "system" ? (
                            <SunMoonIcon />
                        ) : theme === "dark" ? (
                            <MoonIcon />
                        ) : (
                            <SunIcon />
                        )
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-gray-600 bg-white shadow-lg rounded-md w-48">
                <DropdownMenuLabel>Appearence</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem className="cursor-pointer" checked={theme === "system"} onClick={() => setTheme("system")}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="cursor-pointer" checked={theme === "light"} onClick={() => setTheme("light")}>
                    light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="cursor-pointer" checked={theme === "dark"} onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
