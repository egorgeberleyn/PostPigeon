import {jwtDecode} from "jwt-decode";

interface Claims {
    userId: string;
}

export const decodeToken = (token: string): Claims => {
    var decodeToken = jwtDecode(token);
    return {userId: decodeToken.sub!}
}