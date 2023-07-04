import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';
import { SHLINK_API_KEY } from '$env/static/private'

export const POST: RequestHandler = async (e: RequestEvent) => {

    if(!e.request.body) {
        throw error(400, `Invalid API Call: Missing request body`)
    } 

    const requestBodyJson = await e.request.json();
    const requestLongUrl:string|null = requestBodyJson.longUrl;

    if(!requestLongUrl) {
        throw error(400, `Invalid API Call: Missing longUrl in request`)
    } 

    const urlResponse:any = await fetch('https://camw.me/rest/v3/short-urls', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": SHLINK_API_KEY,
            "accept": "application/json"
          },
        body: JSON.stringify({
            "longUrl": requestLongUrl,
            "tags": [
                "stuff"
            ],
            "crawlable": false,
            "forwardQuery": true,
            "findIfExists": true,
            "domain": "camw.me",
            "shortCodeLength": 6
        })
    }).catch(err => {
        throw error(502, "Shlink returned an error.")
    })

    const urlResponseParse = await urlResponse.json();

    return json({ 
        shortUrl: `${urlResponseParse.shortUrl.replace(/^http:\/\//i, 'https://')}`,
        shortCode: `${urlResponseParse.shortCode}`,
        qrCodeUrl: `${urlResponseParse.shortUrl.replace(/^http:\/\//i, 'https://')}/qr-code?size=300&format=png&errorCorrection=H&margin=10`
    });
};