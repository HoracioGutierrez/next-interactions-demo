import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <h1>Demo Next Endpoints</h1>
            <nav className="gap-4 flex">
                <Link href="/demo-one" prefetch={false}>demo 1</Link>
                <Link href="/demo-two" prefetch={false}>demo 2</Link>
                <Link href="/demo-three" prefetch={false}>demo 3</Link>
                <Link href="/demo-four" prefetch={false}>demo 4</Link>
            </nav>
        </header>
    )
}