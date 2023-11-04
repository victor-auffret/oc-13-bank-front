
export const FormatSold = (n: number) => {
 const cent = n % 100
 const unity = Math.trunc((n - cent) / 100)
 let virgule = unity.toString()
 if (virgule.length > 3) {
  let arr = Array.from(virgule).reverse()
  let formatedUnity = ""
  for (let i = 0; i < arr.length; i++) {
   formatedUnity += arr[i]
   if (((i + 1) % 3) === 0 && (i + 1) < arr.length) {
    formatedUnity += ","
   }
  }
  virgule = (Array.from(formatedUnity).reverse()).join("")
 }
 return `$${virgule}.${cent}`
}
