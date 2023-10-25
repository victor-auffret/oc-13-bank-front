import { myFetch } from "./ajax"
import { IUser } from "./reducers/authSlice"

export interface IErrorMsg {
 status: 400 | 401 | number
 message: string
}

export interface ILoginResponseOk {
 status: 200,
 message: "User successfully logged in",
 body: {
  token: string
 }
}

export interface IGetUserResponseOk {
 status: 200,
 message: "Successfully got user profile data",
 body: IUser
}

export type LoginResponse = ILoginResponseOk | IErrorMsg
//type RegisterResponse = IUser | IErrorMsg
type GetUserResponse = IGetUserResponseOk | IErrorMsg
//type SetUserResponse = IUser | IErrorMsg

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

 static async getUserInfos(token: string): Promise<GetUserResponse> {
  const url = `${completeUrl}/profile`
  return await myFetch(url, "post", null, token).then(r => r.json()).catch(e => {
   return { msg: e ?? "erreur de recuperation de donnees de user" }
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