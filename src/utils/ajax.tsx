const myFetch = (
 url: string,
 method: string,
 data?: object,
 token?: string
) => {
 const body = data ? JSON.stringify(data) : "{}"
 const jwt = token ? token : ""
 return fetch(url, {
  method: method || 'post',
  headers: new Headers({
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'Authorization': `bearer ${jwt}`
  }),
  body
 })
}

const useFetch = (url: string) => {
 const controller = new AbortController();
 const signal = controller.signal;

 const get = (data?: object, token?: string) => myFetch(url, 'get', { ...data, ...signal }, token)
 const post = (data?: object, token?: string) => myFetch(url, 'post', { ...data, ...signal }, token)
 const put = (data?: object, token?: string) => myFetch(url, 'put', { ...data, ...signal }, token)
 //const data = {}
 //const isLoading = false
 //const error: string[] = []
 const cancel = () => {
  controller.abort();
  // loading = false
 }
 return { get, post, put, /*data, isLoading, error,*/ cancel }
}

export { myFetch, useFetch }
