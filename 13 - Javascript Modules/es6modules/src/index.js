import {apikey, score} from './config'

console.log(apikey, score)

import User, {createURL, gravatar} from './user'

const user = new User('Teo','Bali','teofiluscandra.com')
const profile = createURL(user.name)
const image = gravatar(user.address)
console.log(user, profile, image)
