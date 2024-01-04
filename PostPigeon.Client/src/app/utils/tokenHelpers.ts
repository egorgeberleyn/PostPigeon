import {jwtDecode} from "jwt-decode";

export const decodeToken = (token: string) => {
    var decodeToken = jwtDecode(token);
    return decodeToken
}