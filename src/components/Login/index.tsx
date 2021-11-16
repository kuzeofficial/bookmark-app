import {useState} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { saveToken } from "src/services/token";
import { useRouter } from 'next/router';
import { AlertError } from './AlertError';
import { ButtonLogin } from './ButtonLogin';
import { SvgCircle } from './SvgCircle';
import { FieldHelper } from './FieldHelper';
const axios = require('axios');

export const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    return (
        <Formik 
            initialValues={{username: '', password: ''}} 
            validationSchema={Yup.object().shape({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
            })}
            onSubmit={async (values, {resetForm}) => {
              setIsLoading(true);
                await axios.post(`${process.env.LOGIN_URL}`, {
                    'username-or-email': values.username,
                    password: values.password
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }).then(async (response:any) => {
                      const {"access-token": accessToken, "refresh-token": refreshToken} = response.data.tokens
                      await response.status === 200 && router.push('/login')
                      saveToken('access-token', accessToken)
                      saveToken('refresh-token', refreshToken)
                })
                .catch(async (error:any) => {
                    setIsError(true)
                    setIsLoading(false)
                    resetForm()
                    setTimeout(() => {
                      setIsError(false)
                    }, 2000)
                })
            }}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg md:rounded-2xl md:w-auto md:h-auto w-full h-screen md:px-48 py-32 flex items-center flex-col">
                    <div className="w-80 max-w-2xl ">
                    {isError && (
                      <AlertError/>
                    )}
                    <div className="flex items-center flex-col">
                      <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      <h1 className="text-center mb-20 mt-5 font-black dark:text-gray-100 tracking-tight md:text-6xl text-5xl">Login</h1>
                    </div>
                      
                      <div className="mb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="username">
                          Username
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Cristian" value={values.username} onChange={(e) => handleChange(e)}/>
                        {errors && errors.username && (
                                <FieldHelper mensaje="Please enter a user."/>
                        )}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                          Password
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={values.password} onChange={(e) => handleChange(e)}/>
                        {errors && errors.password && (
                                <FieldHelper mensaje="You need a password for continue."/>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <ButtonLogin>
                            {
                                isLoading && (
                                    <SvgCircle/>
                                )
                            }
                            {
                                isLoading ? 'Logging in' : 'Log in'
                            }
                        </ButtonLogin>
                      </div>
                  </div>
                </form>
            )}
        </Formik>
        
    )
}
