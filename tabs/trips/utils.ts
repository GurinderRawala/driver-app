import { AddressOutput } from "generated/graphql";

export const createGoogleMapURL = (address: AddressOutput, url = 'https://www.google.com/maps/place/' ): string =>{
    const addressURL = `${address.unitNumber}+${address.streetName.replace(".", "")},+${address.city}+${address.state}+${address.postalCode}`.replace(/ /g, '+')

    return [url, addressURL].join("");
}