/**
 * @author: Patrik Forsberg <patrik.forsberg@coldmind.com>
 * @date: 2023-01-25 13:36
 */

import { AxiosResponse } from 'axios';

/**
 * Interface for the CmApiClient class
 *
 * @interface ICmApiClient
 */
interface ICmApiClient {
	/**
	 * Wrapper function for axios.get
	 * @param {string} url - The URL to send the request to.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	get(url: string, config?: object): Promise<AxiosResponse>;

	/**
	 * Wrapper function for axios.post
	 * @param {string} url - The URL to send the request to.
	 * @param {object} data - The data to be sent in the request's body.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	post(url: string, data?: object, config?: object): Promise<AxiosResponse>;

	/**
	 * Wrapper function for axios.put
	 * @param {string} url - The URL to send the request to.
	 * @param {object} data - The data to be sent in the request's body.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	put(url: string, data?: object, config?: object): Promise<AxiosResponse>;

	/**
	 * Wrapper function for axios.delete
	 * @param {string} url - The URL to send the request to.
	 * @param {object} config - Additional configurations to be sent with the request.
	 * @returns {Promise<AxiosResponse>} - A promise that resolves to the server's response.
	 */
	delete(url: string, config?: object): Promise<AxiosResponse>;
}

