import { DocumentNode, gql,useQuery } from "@apollo/client"

const fetchSingleProduct = (name: string) : DocumentNode =>{

const SINGLEPRODUCTQUERY = gql`
{
  products(filters: {name: {eq: "${name}"}}) {
    data {
      attributes {
        name,
        price,
        description,
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
  }
}
`
return SINGLEPRODUCTQUERY
}

export const useFetchSingeProduct = (name: string)=>{
  return useQuery(fetchSingleProduct(name))
}