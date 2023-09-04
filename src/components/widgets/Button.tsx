type Props = {
    children: React.ReactNode,
    className?: string,
}

export default function Button({ children, className }: Props) {
    return (
        <button className={`bg-blue-500 text-white p-2 rounded-md ${className}`}>{children}</button>
    )
}