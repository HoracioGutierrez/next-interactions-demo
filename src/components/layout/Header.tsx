import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <h1>Demo Next Endpoints</h1>
            <nav className="gap-4 flex">
                <Link href="/demo-one">demo 1</Link>
                <Link href="/demo-two">demo 2</Link>
            </nav>
        </header>
    )
}