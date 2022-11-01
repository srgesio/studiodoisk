import { GraphQLRequestContext } from "graphql-request/dist/types"
require('dotenv/config')
const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.API_DATOCMS

async function fetchAPI({ query, variables = {} }: GraphQLRequestContext) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}


export async function getPresentationAPI() {
    const data = await fetchAPI({
        query: `query {
                    allPresentations {
                        presentationImage{
                        url
                        }
                        presentationName
                        presentationText
                    }
                }`})
    return data?.allPresentations
}
export async function getBannersAPI() {
    const data = await fetchAPI({
        query: `query {
                   allBanners(orderBy:_createdAt_ASC) {
                        bannerImage {
                            alt
                            url
                            width
                            height
                        }
                        url
                    }
                }`})
    return data?.allBanners
}