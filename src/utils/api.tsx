interface IErrorMsg {
 msg: string
}

interface ILoginResponseOk {
 token: string
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

class Api {

 static async login(username: string, password: string): Promise<LoginResponse> {
  if (username == password && username == "toto") {
   return { token: "token" }
  }
  return { msg: "mauvais mot de passe" }
 }

 static async register(email: string, firstName: string, password: string): Promise<RegisterResponse> {
  return { msg: "impossible de creer un compte" }
 }

 static async getUserInfos(token: string): Promise<GetUserResponse> {
  return { msg: "impossible de trouver les infos du compte" }
 }

 static async setUserInfos(token: string, firstName: string, lastName: string): Promise<SetUserResponse> {
  return { msg: "impossible de modifier le profil" }
 }

}

export { Api }