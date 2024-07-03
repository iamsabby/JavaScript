// Practice Set 9

//1. Write a program to load a Javasript file in a browser using Promises. Use .then() to display an alert when the load is complete.

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
      let script = document.createElement("script")
      script.src = src
      script.onload = () => {
        resolve(src)
      }
      document.head.append(script)
    })
  }
  
  // let b = loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
  // b.then((value) => {
  //   console.log(value)
  // })
  
  //2. Write the same program from previous question and use async/await syntax.
  
  // const main1 = async () => {
  //   let a = await loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
  //   console.log(a)
  // }
  // main1()
  
  //3. Create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try catch to handle its error.
  
  // let p = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       reject(new ReferenceError("Not acceptable"))
  //     }, 3000)
  //   })
  // }
  
  // let a = async () => {
  //   try {
  //     let c = await p()
  //     console.log(c)
  //   }
  //   catch (err) {
  //     console.log(err.name)
  //     console.log(err.message)
  //   }
  // }
  // a()
  
  //4. Write a program using Promise.all() inside an async/await to await 3 promises. Compare its results with the case where we await these promises one by one.
  
  let p1 = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10)
      }, 1000)
    })
  }
  
  let p2 = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(20)
      }, 2000)
    })
  }
  
  let p3 = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(30)
      }, 3000)
    })
  }
  
  const run = async () => {
    console.time("run")
    let a1 = p1()
    // console.log(a1)
    let a2 = p2()
    // console.log(a2)
    let a3 = p3()
    let a4 = await Promise.all([a1,a2,a3])
    console.log(a1, a2, a3)
    console.timeEnd("run")
  }
  
  run()