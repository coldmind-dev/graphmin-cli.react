import { AxiosResponse }        from "axios";
import axios, { AxiosInstance } from 'axios';

/**
 * Class that extends the axios client and adds additional functionality
 */
export class CmApiClient {
	private axios: AxiosInstance;
	private axios: AxiosInstance;
	private responseSubject = new Subject();

	constructor() {
		this.axios = axios.create();
		this.axios.interceptors.response.use(
			(response) => {
				this.responseSubject.next(response);
				return response;
			},
			(error) => {
				this.responseSubject.error(error);
				return Promise.reject(error);
			}
		);
	}

	/**
	 * Wrapper function for axios.get that tags the request
	 * @param {string} url - The URL to send the request to.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @param {string} tag - The tag for the request
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	public async getAsync(url: string, config = {}, tag: string) {
		config.headers = {
			...config.headers,
			'X-Request-Tag': tag,
		};
		return this.axios.get(url, config);
	}

	/**
	 * Wrapper function for axios.get
	 * @param {string} url - The URL to send the request to.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise} - A promise that resolves to the server's response.
	 */
	public async get(url: string, config = {}) {
		return this.axios.get(url, config);
	}

	/**
	 * Wrapper function for axios.post
	 * @param {string} url - The URL to send the request to.
	 * @param {object} data - The data to be sent in the request's body.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise} - A promise that resolves to the server's response.
	 */
	public async post(url: string, data = {}, config = {}) {
		return this.axios.post(url, data, config);
	}

	/**
	 * Wrapper function for axios.put
	 @param {string} url - The URL to send the request to.
	 @param {object} data - The data to be sent in the request's body.
	 @param {object} config - Additional configurations to be sent with the request.
	 @returns {Promise} - A promise that resolves to the server's response.
	 */
	public async put(url: string, data = {}, config = {}) {
		return this.axios.put(url, data, config);
	}

	/**
	 * Wrapper function for axios.delete
	 * @param {string} url - The URL to send the request to.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise} - A promise that resolves to the server's response.
	 */
	public async delete(url: string, config = {}) {
		return this.axios.delete(url, config);
	}

	/**
	 * Wrapper function for axios.get that tags the request
	 * @param {string} url - The URL to send the request to.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @param {string} tag - The tag for the request
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	public async get(url: string, config = {}, tag: string) {
		config.headers = {
			...config.headers,
			'X-Request-Tag': tag,
		};
		return this.axios.get(url, config);
	}

	/**
	 * Async method that waits for a response with a specific tag
	 * @param {string} tag - The tag for the request
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	public async waitForResponse(tag: string): Promise<AxiosResponse> {
		return new Promise((resolve, reject) => {
			const subscription = this.responseSubject.subscribe((response) => {
				if (response.headers['x-request-tag'] === tag) {
					subscription.unsubscribe();
					resolve(response);
				}
			}, (error) => {
				reject(error);
			});
		});
	}
}
