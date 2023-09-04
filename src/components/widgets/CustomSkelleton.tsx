type SkelletonProps = {
    className?: string
}

const Skelleton = ({ className }: SkelletonProps) => {
    return (
        <div className={`animate-pulse bg-gray-200 rounded-md ${className}`}>
        </div>
    )
}


export default function CustomSkelleton() {
    return (
        <div className="flex items-center space-x-4">
            <Skelleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skelleton className="h-4 w-40" />
                <Skelleton className="h-4 w-20" />
            </div>
        </div>
    )
}