import {useQuery, gql, DocumentNode} from '@apollo/client'

const relatedProducts = (relatedProduct: string) : DocumentNode=>{

const RELATEDRODUCTSQUERY = gql`
{
  products(filters: {catagory: {name: {eq: "${relatedProduct}"}}}) {
    data {
      attributes {
        name,
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

return RELATEDRODUCTSQUERY
 }

 export const useFetchRelatedProducts = (relatedProduct: string)=>{

  return useQuery(relatedProducts(relatedProduct))
 }