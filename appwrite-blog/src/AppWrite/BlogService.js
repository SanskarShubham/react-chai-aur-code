import config from "../config/config"
import { Client, Databases, Query, ID, Storage } from "appwrite";

class BlogService {
    client = new Client()
    databases;
    storage;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)

    }

    async createBlog({ title, slug, content, featuredImage, status, userId }) {
        try {
            const blog = this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectioinId, slug, { title, content, featuredImage, status, userId })
            if (blog) {
                return blog
            } else {
                return blog
            }
        } catch (error) {
            console.log("BlogService createBlog error", error);
        }
    }

    async getAllBlogs(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectioinId, queries)
        } catch (error) {
            console.log("BlogService getAllBlogs error", error);
        }

    }
    async updateBlog(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectioinId, slug, { title, content, featuredImage, status })
        } catch (error) {
            console.log("BlogService updateBlog error", error);
        }
    }

    async deleteBlog(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectioinId, slug)
            return true
        } catch (error) {
            console.log("BlogService deleteBlog error", error);
            return false
        }
    }

    async getBlogBySlug(slug) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectioinId, slug)
        } catch (error) {
            console.log("BlogService getBlogBySlug error", error);
        }
    }

    // file services

    async uploadFile(file) {
        try {
            return await this.storage.createFile(config.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("BlogService uploadFile error", error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(config.appwriteBucketId, fileId)
        } catch (error) {
            console.log("BlogService deleteFile error", error);
        }
    }
    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(config.appwriteBucketId, fileId)
        } catch (error) {
            console.log("BlogService getFile error", error);
        }
    }

}

const blogService = new BlogService();
export default blogService;
