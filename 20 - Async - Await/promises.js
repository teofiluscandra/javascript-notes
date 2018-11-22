function breathe(amount) {
    return new Promise((resolve, reject) => {
      if (amount < 500) {
        reject('That is too small of a value');
      }
      setTimeout(() => resolve(`Done for ${amount} ms`), amount);
    });
}
  
breathe(1000).then(res => {
    console.log(res);
    return breathe(500);
}).then(res => {
    console.log(res);
    return breathe(600);
}).then(res => {
    console.log(res);
    return breathe(200); // stop in here
}).then(res => {
    console.log(res);
    return breathe(500);
}).then(res => {
    console.log(res);
    return breathe(2000);
}).then(res => {
    console.log(res);
    return breathe(250);
}).then(res => {
    console.log(res);
    return breathe(300);
}).then(res => {
    console.log(res);
    return breathe(600);
}).catch(err => {
    console.error(err);
    console.error('YOU SCHREWED UP');
})