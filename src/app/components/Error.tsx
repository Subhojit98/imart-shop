import { Skeleton } from "@/components/ui/skeleton"


const Error = () => {
    return (
        <>
            <div className="flex gap-10 z-50">
                <div className="flex flex-col space-y-3 z-50 bg-slate-300 items-center justify-center rounded-xl">
                    <Skeleton className="h-[35%] sm:h-[30vh] xl:h-[35vh] bg-neutral-100 w-[85%] flex flex-col rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-6 bg-gray-200 w-[250px]" />
                        <Skeleton className="h-6 bg-gray-200 w-[200px]" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 z-50 bg-slate-300 items-center justify-center rounded-xl">
                    <Skeleton className="h-[35%] sm:h-[30vh] xl:h-[35vh] bg-neutral-100 w-[85%] flex flex-col rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-6 bg-gray-200 w-[250px]" />
                        <Skeleton className="h-6 bg-gray-200 w-[200px]" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 z-50 bg-slate-300 items-center justify-center rounded-xl">
                    <Skeleton className="h-[35%] sm:h-[30vh] xl:h-[35vh] bg-neutral-100 w-[85%] flex flex-col rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-6 bg-gray-200 w-[250px]" />
                        <Skeleton className="h-6 bg-gray-200 w-[200px]" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 z-50 bg-slate-300 items-center justify-center rounded-xl">
                    <Skeleton className="h-[35%] sm:h-[30vh] xl:h-[35vh] bg-neutral-100 w-[85%] flex flex-col rounded-xl" />
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
