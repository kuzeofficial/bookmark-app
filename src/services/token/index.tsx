import Cookies from 'universal-cookie';

export const saveToken = (key: string, token: string) => {
    const cookies = new Cookies();
    cookies.set(key, token, { path: '/' });
    return Promise.resolve();
};
export const getToken = (key: string) => {
  const cookies = new Cookies();
  return cookies.get(key);
};
export const deleteToken = (key: string) => {
  const cookies = new Cookies();
  cookies.remove(key);
  return;
};