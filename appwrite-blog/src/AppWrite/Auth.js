import config from "../config/config"
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            const userAccount = await this.account.createEmailSession(email, password)
            if (userAccount) {
                return userAccount
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }
    async logout(){
        try {
            return await this.account.deleteSession("current")
        } catch (error) {

        }
    }
}

const authService = new AuthService()

export default authService