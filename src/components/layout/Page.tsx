import { CornerDownLeft } from "lucide-react"
import Link from "next/link"

type PageProps = {
    children: React.ReactNode,
    title: string,
    id?: string,
}

export default function Page({ children, title, id = "page" }: PageProps) {

    const isHome = id.toLowerCase() == "home" || title.toLowerCase() == "home"

    return (
        <main className="p-4" id={id}>
            <header className="pb-4">
                {!isHome && (
                    <Link href="/" className="flex gap-2">
                        <CornerDownLeft width={16} className="relative top-[2 px]" />ir atras
                    </Link>
                )}
                <h2 className="text-3xl">{title}</h2>
            </header>
            {children}
        </main>
    )
}