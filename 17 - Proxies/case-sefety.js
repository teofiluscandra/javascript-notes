const safeHandler = {
    set(target, name, value) {
        const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());
        if(!(name in target) && likeKey) {
            throw new Error(`Oops! Looks like like we already have a(n) ${name} property but with the case of ${likeKey}.`)
        }
    }
}

const safety = new Proxy({ id: 100 }, safeHandler)
safety.ID = 200