import { NextApiRequest, NextApiResponse } from "next";
import { getBannersAPI } from "../../../lib/api";





export default function getBanners(request: NextApiRequest, response: NextApiResponse) {
    getBannersAPI()
        .then((res: NextApiResponse) => {
            const banners = res;
            response.json(banners)
        })
}
