// Importing Cookies from the library
import Cookies from 'universal-cookie';
// Function for save the token, recibe for the parameters the token and the key
export const saveToken = (key: string, token: string) => {
    // Create new cookie
    const cookies = new Cookies();
    // Set the values of the cookies and the expiration date in miliseconds
    cookies.set(key, token, { path: '/', expires: new Date(Date.now()+2277000)});
    return Promise.resolve();
};
// Function for getToken, recibe the key as string
export const getToken = (key: string) => {
  const cookies = new Cookies();
  // Return the cookies with method get passing him the key
  return cookies.get(key);
};
// Function for deleteToken, recibe the key as string
export const deleteToken = (key: string) => {
  const cookies = new Cookies();
  // Return the cookies with method remove passing him the key
  cookies.remove(key);
  return;
};