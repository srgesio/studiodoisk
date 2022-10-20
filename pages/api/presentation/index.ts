import { NextApiRequest, NextApiResponse } from "next";


require('dotenv/config')

const tokenApi = process.env.API_DATOCMS

export default function getPresentations(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'GET') {
        fetch('https://graphql.datocms.com', {
            method: 'POST',
            headers: {
                'Authorization': `${tokenApi}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                "query": `query {
                    allPresentations {
                        presentationImage{
                        url
                        }
                        presentationName
                        presentationText
                    }
                }` })
        })
            .then((res) => res.json())
            .then((res) => {
                const presentations = res.data.allPresentations;
                response.json(presentations)
            })
    }
}