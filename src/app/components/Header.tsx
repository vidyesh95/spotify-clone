"use client";
import React from "react";
import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Button from "@/app/components/Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = (
    {
        children,
        className
    }
) => {
    const router = useRouter();

    const handleLogout = () => {
        // Handle logout in the future
    }

    return (
        <div className={twMerge("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft className="text-white" size={24} onClick={() => router.back()}/>
                    </button>
                    <button
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight className="text-white" size={24} onClick={() => router.forward()}/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-black" size={24}/>
                    </button>
                    <button
                        className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-black" size={24}/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button
                                className="bg-transparent text-neutral-300 font-medium"
                                onClick={
                                    () => {
                                    }
                                }
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="bg-white px-6 py-2 font-medium"
                                onClick={
                                    () => {
                                    }
                                }
                            >
                                Sign in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
};
export default Header;