import { DocumentNode, gql,useQuery } from "@apollo/client"

const fetchAllProdcuts = (Usedfilters: string[],priceFilter: number,sortType:string,pageSize: number, pageCount: number) : DocumentNode =>{

const detaultFilterStrings = ["Watches", "TV&Home", "Ipads", "Accessories", "Laptops", "Phones"]
const filterStrings = Usedfilters.length == 0 ? detaultFilterStrings.join('","') : Usedfilters.map((filter)=>filter).join('","')
const priceFilterString = priceFilter ? priceFilter >= 1000 ? `{price: {gt: ${priceFilter}}}` : `{price: {lte: ${priceFilter}}}` :  `{price: {gte: 0}}`
const sortDateString = sortType === "Latest" ? ` sort: "publishedAt:desc"` : ' sort: "publishedAt:asc"'
const ALLPRODUCTSQUERY = gql`
{
 products(filters: {and:[
  {catagory: {name: {in: ["${filterStrings}"]}}},
  ${priceFilterString},
]}

${sortDateString}

,pagination: { page: ${pageCount}, pageSize: ${pageSize} }) {
    data {
    attributes{
      name,
      description,
      price,
      quantity,
      images{
        data{
          attributes{
            url
          }
        }
      },
 catagory{
          data{
            attributes{
              name
            }
          }
        }
    }
    }
    
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
}
}
`
return ALLPRODUCTSQUERY
}

export  const useFetchAllProducts = (filtes: string[],priceFilter: number,sortType:string, pageSize: number, pageCount: number)=>{
   return useQuery(fetchAllProdcuts(filtes,priceFilter, sortType,pageSize, pageCount))
}
