import slug from 'slug'
import { URL } from './config'
import base64 from 'base-64'

export default function User(name, address, website){
    return {name , address, website }
}

export function createURL(name) {
    return `${URL}/users/${slug(name)}`;
}

export function gravatar(email) {
    const hash = base64.encode(email);
    const photoURL = `https://www.gravatar.com/avatar/${hash}`;
    return photoURL;
}