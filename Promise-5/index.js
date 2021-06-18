function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    if (timeOfDay === 'breakfast' || timeOfDay === 'lunch' || timeOfDay === 'dinner') {
      resolve('macaroni')
    }
    reject('I am not hungry right now')
  })
}


// Call yout function and resolve the promise here! 
whatToEat('lunch').then((f) => {
  console.log(f)
})
  .catch((err) => {
    console.log(err)
  })

// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  