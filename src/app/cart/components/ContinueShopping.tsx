import { Button } from "@/components/ui/button"


function ContinueShopping() {
    return (
        <>
            <div className="w-full h-full flex justify-center">
                <div className="w-[88%] h-[23vh] bg-gray-200 mt-20 flex flex-col lg:flex-row items-center justify-evenly p-2 lg:p-0">
                    <div className="flex flex-col gap-3 mb-5 items-start lg:flex-none xl:mb-0">
                        <h3 className="text-2xl">Continue shopping</h3>
                        <p className="mt-3">Discover more products that are prefect for gift, for your wardrobe, or a unique addition to your collection.</p>
                    </div>
                    <Button className="xl:ml-5 p-5 bg-gray-950 hover:bg-gray-900 place-self-start lg:place-self-center">Continue shopping</Button>
                </div>
            </div>
        </>
    )
}

export default ContinueShopping
