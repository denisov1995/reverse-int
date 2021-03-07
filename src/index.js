module.exports = function reverse (n) {
    arr=String(n)
    a = arr.split('')
    for (let i = 0; i < a.length; i++) {
        if (a[0]=== '-') {
          delete a[0]
        }  
    }
    result = a.reverse().join('')
    return (result)
  }

