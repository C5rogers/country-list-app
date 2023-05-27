import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

const httpLink = createHttpLink({
    uri: 'https://countries.trevorblades.com/'
})

const cache = new InMemoryCache()

const apploClient = new ApolloClient({
    link: httpLink,
    cache
})

export default apploClient