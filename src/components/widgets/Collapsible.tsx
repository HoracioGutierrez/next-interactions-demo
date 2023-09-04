"use client"

import { useEffect, useRef, useState } from "react"

type CollapsibleProps = {
    children: React.ReactNode,
    title: string,
}

export default function Collapsible({ children, title }: CollapsibleProps) {

    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.clientHeight)
            document.documentElement.style.setProperty('--collapsible-height', `${height}px`)
        }
    }, [])

    const toggle = () => {
        if (open) {
            document.documentElement.style.setProperty('--collapsible-height', `0px`)
        } else {
            document.documentElement.style.setProperty('--collapsible-height', `${height}px`)
        }
        setOpen(!open)
    }

    return (
        <div className="border border-gray-300 rounded-md">
            <div className="flex justify-between items-center p-2" onClick={toggle}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <svg className={`w-6 h-6 transition-all ${open ? "rotate-0" : "-rotate-90"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="transition-transform transform rotate-0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div ref={contentRef} style={{ height: "var(--collapsible-height)" }} className="transition-all overflow-hidden">
                <div className="p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}