require('dotenv/config')
import { GraphQLClient } from "graphql-request";
export function request({ query, variables, includeDrafts, excludeInvalid }) {

    const tokenApi = process.env.API_DATOCMS
    const headers = {
        authorization: `Bearer ${tokenApi}`,
    };
    if (includeDrafts) {
        headers['X-Include-Drafts'] = 'true';
    }
    if (excludeInvalid) {
        headers['X-Exclude-Invalid'] = 'true';
    }
    const client = new GraphQLClient('https://graphql.datocms.com', { headers });
    return client.request(query, variables);
}