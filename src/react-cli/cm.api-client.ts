import axios, { AxiosInstance } from 'axios';

/**
 * Class that extends the axios client and adds additional functionality
 */
export class CmApiClient {
	private axios: AxiosInstance;

	/**
	 * Creates an instance of CmApiClient.
	 */
	constructor() {
		this.axios = axios.create();
		this.axios.interceptors.response.use(
			(response) => {
				// Additional logic can be added here to handle the response
				return response;
			},
			(error) => {
				// Additional logic can be added here to handle errors
				return Promise.reject(error);
			}
		);
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
}

const cmApiClient = new CmApiClient();

/**

Example usage of the CmApiClient class
 */
cmApiClient
	.get('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.log(error);
	});
