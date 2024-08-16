import axios, { AxiosError, AxiosResponse } from 'axios';
import { IAuthResponse } from '../types/AuthResponse';

export const API_URL = 'https://test-back.cryptelligence.ai/api/v1/';

const instance = axios.create({
	baseURL: '/api/v1/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const auth = async (): Promise<AxiosResponse<IAuthResponse>> => {
	console.log('trying to auth');
	return instance.post<IAuthResponse>('auth');
};

export const refresh = async (
	id: string,
	refreshToken: string
): Promise<AxiosResponse<IAuthResponse>> => {
	console.log('trying to refresh');
	return instance.post<IAuthResponse>('auth/refresh', {
		id,
		refreshToken,
	});
};

instance.interceptors.response.use(
	(response: AxiosResponse) => response,

	async (error: AxiosError) => {
		const originalRequest = error.config;

		if (error?.response?.status === 401 && originalRequest) {
			try {
				const refreshToken = localStorage.getItem('refreshToken');
				const userId = localStorage.getItem('userId');

				if (refreshToken && userId) {
					const response = await refresh(userId, refreshToken);

					localStorage.setItem('refreshToken', response.data.refreshToken);
					localStorage.setItem('userId', response.data.user.id);

					const bearerToken = `Bearer ${response.data.accessToken}`;

					instance.defaults.headers.common['Authorization'] = bearerToken;
					originalRequest.headers['Authorization'] = bearerToken;

					return instance.request(originalRequest);
				} else {
					const response = await auth();

					localStorage.setItem('refreshToken', response.data.refreshToken);
					localStorage.setItem('userId', response.data.user.id);

					const bearerToken = `Bearer ${response.data.accessToken}`;

					instance.defaults.headers.common['Authorization'] = bearerToken;
					originalRequest.headers['Authorization'] = bearerToken;

					return instance.request(originalRequest);
				}
			} catch (error) {
				console.log(error);
				return Promise.reject(error);
			}
		}

		return Promise.reject(error);
	}
);

export default instance;
