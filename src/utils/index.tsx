const isEmpty = (v?: any) => {
 return v === undefined ||
  v === null ||
  (typeof v === "object" && Object.keys(v).length === 0) ||
  (typeof v === "string" && v.trim().length === 0)
}

export { isEmpty }
