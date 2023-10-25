const myFetch = (
 url: string,
 method: string,
 data?: object | null,
 token?: string
) => {
 const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
 })
 const body = data ? JSON.stringify(data) : "{}"
 return fetch(url, {
  method, headers, body
 })
}

const useFetch = (url: string) => {
 const controller = new AbortController();
 const signal = controller.signal;
 const get = (data?: object, token?: string) => myFetch(url, 'get', { ...data, ...signal }, token)
 const post = (data?: object, token?: string) => myFetch(url, 'post', { ...data, ...signal }, token)
 const put = (data?: object, token?: string) => myFetch(url, 'put', { ...data, ...signal }, token)
 const cancel = () => {
  controller.abort();
 }
 return { get, post, put, /*data, isLoading, error,*/ cancel }
}

export { myFetch, useFetch }
