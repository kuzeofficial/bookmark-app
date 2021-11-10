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
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded md:w-auto md:h-auto w-full h-screen md:px-48 py-32 flex items-center flex-col">
                    <div className="w-80 max-w-2xl">
                    {isError && (
                      <AlertError/>
                    )}
                      <h1 className="text-center mb-20 mt-10 font-black tracking-tight md:text-6xl text-5xl">BookMarker📚</h1>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Cristian" value={values.username} onChange={(e) => handleChange(e)}/>
                        {errors && errors.username && (
                                <FieldHelper mensaje="Please enter a user."/>
                        )}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={values.password} onChange={(e) => handleChange(e)}/>
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
