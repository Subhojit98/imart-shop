import {
  Card,
  CardFooter,
} from "@/components/ui/card"
const ProductCatagoty = () => {
  return (
    <>
      <div className="w-full mt-40 bg-white flex justify-center pattern3">
        <div className="w-[85%] lg:w-[90%] flex flex-col gap-10 z-30 ">
          <h4 className="text-xl lg:text-2xl">Shop by catagory</h4>

          {/* Catgory Grid -> */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 xl:gap-5">

            {/* Catagory Card 1 -> */}
            <Card className="bg-watch-card-bg bg-no-repeat bg-contain bg-center h-[35vh] sm:h-[38vh] xl:h-[40vh] flex flex-col items-center justify-end cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:scale-95 duration-300 ease-in-out rounded-xl group hover:opacity-85">

              <CardFooter>
                <p className="text-lg font-semibold opacity-0 duration-300 ease-out group-hover:opacity-100">Watches</p>
              </CardFooter>
            </Card>

            {/* Catagory Card 2 -> */}
            <Card className="bg-cover bg-tv-card-bg h-[35vh] sm:h-[38vh] xl:h-[40vh] flex flex-col items-center justify-end cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  hover:scale-95 duration-300 ease-in-out rounded-xl group hover:opacity-85">
              <CardFooter>
                <p className="text-lg font-semibold text-white opacity-0 duration-300 ease-out group-hover:opacity-100">TV&Home</p>
              </CardFooter>
            </Card>

            {/* Catagory Card 3 -> */}
            <Card className="bg-cover bg-center bg-ipads-card-bg h-[35vh] sm:h-[38vh] xl:h-[40vh] flex flex-col items-center justify-end cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  hover:scale-95 duration-300 ease-in-out rounded-xl group hover:opacity-85">

              <CardFooter>
                <p className="text-lg font-semibold text-white opacity-0 duration-300 ease-out group-hover:opacity-100">Ipads</p>
              </CardFooter>

            </Card>

            {/* Catagory Card 4 -> */}
            <Card className="bg-cover bg-right-top bg-accessories-card-bg h-[35vh] sm:h-[38vh] xl:h-[40vh] flex flex-col items-center justify-end cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  hover:scale-95 duration-300 ease-in-out rounded-xl group hover:opacity-85">

              <CardFooter>
                <p className="text-lg font-semibold text-white opacity-0 duration-300 ease-out group-hover:opacity-100">Accessories</p>
              </CardFooter>

            </Card>

            {/* Catagory Card 5 -> */}
            <Card className="bg-cover bg-right bg-laptop-card-bg h-[35vh] sm:h-[38vh] xl:h-[40vh] flex flex-col items-center justify-end cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  hover:scale-95 duration-300 ease-in-out rounded-xl group hover:opacity-85">

              <CardFooter>
                <p className="text-lg font-semibold text-white opacity-0 duration-300 ease-out group-hover:opacity-100">Laptops</p>
              </CardFooter>

            </Card>

            {/* Catagory Card 6 -> */}
            <Card className="bg-cover bg-center bg-iphone-card-bg h-[35vh] sm:h-[38vh] xl:h-[40vh] flex flex-col items-center justify-end cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  hover:scale-95 duration-300 ease-in-out rounded-xl group hover:opacity-85">

              <CardFooter>
                <p className="text-lg font-semibold text-white opacity-0 duration-300 ease-out group-hover:opacity-100">Iphones</p>
              </CardFooter>

            </Card>


          </div>

        </div>
      </div>
    </>
  )
}

export default ProductCatagoty
