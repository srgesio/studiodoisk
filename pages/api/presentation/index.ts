import { NextApiRequest, NextApiResponse } from "next";
import { getPresentationAPI } from "../../../lib/api";





export default function getPresentation(request: NextApiRequest, response: NextApiResponse) {
    getPresentationAPI()
        .then((res) => {
            const presentations = res;
            response.json(presentations)
        })
}
