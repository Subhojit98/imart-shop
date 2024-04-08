"use client"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

// Apollo client ->

const client = new ApolloClient({
    uri: 'https://strapi-backend-35x6.onrender.com/graphql',
    cache: new InMemoryCache()
})


export const AplloClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}