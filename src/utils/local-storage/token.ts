export const TOKEN_KEY = '_token';

export const REFRESH_TOKEN_KEY = '_refresh';

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function setRefreshToken(token: string): void {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function deleteRefreshToken(): void {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}
