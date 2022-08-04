import axiosClient from "@/shared/services/ApiControlCenter";

const API_URL = process.env['url'];

const urlPrefix = "/subUrl";

const urls = {
    get: "/get",
    post: "/post",
};

Object.keys(urls).map((url) => {
    // urls[url] = API_URL + urlPrefix + urls[url];
    return url;
});

class ExampleService {
    async get() {
        return await axiosClient.get(urls.get);
    }
    async post(payload: string) {
        return await axiosClient.post(urls.post, payload);
    }
}
export default new ExampleService();
