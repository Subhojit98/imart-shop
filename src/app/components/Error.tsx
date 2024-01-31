import { Skeleton } from "@/components/ui/skeleton"


const Error = () => {
    return (
        <>
            <div className="flex gap-10">
                <div className="flex flex-col space-y-3 z-50">
                    <Skeleton className="h-[35vh] bg-neutral-00 w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-6 bg-gray-200 w-[250px]" />
                        <Skeleton className="h-6 bg-gray-200 w-[200px]" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 z-50">
                    <Skeleton className="h-[35vh] bg-neutral-00 w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-6 bg-gray-200 w-[250px]" />
                        <Skeleton className="h-6 bg-gray-200 w-[200px]" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 z-50">
                    <Skeleton className="h-[35vh] bg-neutral-00 w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-6 bg-gray-200 w-[250px]" />
                        <Skeleton className="h-6 bg-gray-200 w-[200px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error
