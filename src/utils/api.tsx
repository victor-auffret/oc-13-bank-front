import { myFetch } from "./ajax"

interface IErrorMsg {
 status: 400 | 401 | number
 message: string
}

interface ILoginResponseOk {
 status: 200,
 message: "User successfully logged in",
 body: {
  token: string
 }
}

interface IUser {
 email: string
 password: string
 firstName: string
 lastName: string
}

type LoginResponse = ILoginResponseOk | IErrorMsg
type RegisterResponse = IUser | IErrorMsg
type GetUserResponse = IUser | IErrorMsg
type SetUserResponse = IUser | IErrorMsg

const baseUrl = "http://localhost:3001"
const apiVersion = "/api/v1/user"
const completeUrl = `${baseUrl}${apiVersion}`

class Api {

 static async login(email: string, password: string): Promise<LoginResponse> {
  const url = `${completeUrl}/login`
  return await myFetch(url, "post", {
   email,
   password
  }).then(r => r.json()).catch(e => {
   return { msg: e ?? "mauvais mot de passe" }
  })
 }

 /*
 static async register(email: string, firstName: string, password: string): Promise<RegisterResponse> {
  return { msg: "impossible de creer un compte" }
 }

 static async getUserInfos(token: string): Promise<GetUserResponse> {
  return { msg: "impossible de trouver les infos du compte" }
 }

 static async setUserInfos(token: string, firstName: string, lastName: string): Promise<SetUserResponse> {
  return { msg: "impossible de modifier le profil" }
 }
 */

}

export { Api }