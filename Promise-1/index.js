// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    reject('Failure')
    reject('Failure')
    resolve('>>> Success! <<<');

  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// It logs 'Promise rejected'
// **2)** What happens when you call both `resolve` and `reject`? Test this.
// The promise is resolved
// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes it does
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// It only fails once