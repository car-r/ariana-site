import { gql, GraphQLClient } from "graphql-request"

const endpoint = 'https://api-us-west-2.graphcms.com/v2/ckxpk6xgz05zt01z6gtuqhy32/master'

const graphQLClient = new GraphQLClient(endpoint)

export const getPostSlugs = async () => {
    const query = gql`
        {
            posts {
                slug
            }
        }
    ` 
}

export const getPostData = async (slug) => {
    const query = gql`
        query getPost($slug: String!) {
            post(where: {slug: $slug}) {
                title
            }
        }
    `

    const variables = {
        slug: slug,
    }
}

export const getContentData = async () => {
    const query = gql`
        {
            posts(where: {featured: true}, orderBy: date_DESC) {
                youTubeLink
                title
                featureImage {
                    url
                }
            }
        }   
    `
    return await graphQLClient.request(query)
}