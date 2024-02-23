import { DocumentNode, gql,useQuery } from "@apollo/client"

 const NEWCOLLECTIONQUERY = (pageCount: number, itemSize: number):DocumentNode => {
const newCollectionData = gql`
{
  products(pagination: { page: ${pageCount}, pageSize: ${itemSize} }) {
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
return newCollectionData
}

export const  useFetchNewCollection = (pageCount: number, itemSize: number)=>{
   return useQuery(NEWCOLLECTIONQUERY(pageCount, itemSize))
}
