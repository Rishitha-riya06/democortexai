import { environment } from '../config/environment';

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = environment.apiUrl) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`);
    if (!res.ok) {
      throw new Error(`API GET request failed with status ${res.status}`);
    }
    return res.json();
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`API POST request failed with status ${res.status}`);
    }
    return res.json();
  }
}

export const api = new ApiClient();
