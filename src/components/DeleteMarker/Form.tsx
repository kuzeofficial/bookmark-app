import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonLogin } from '@components/Login/ButtonLogin';
import {FieldHelper} from '@components/Login/FieldHelper';
import { getToken } from 'src/services/token';
import { SvgCircle } from '@components/Login/SvgCircle';
import { AlertError } from '@components/Login/AlertError';
import { SendCorrect } from '../NewMarker/SendCorrect/SendCorrect';
const axios = require('axios');
export const Form = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [added, setAdded] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const token = getToken('access-token')
    return (
        <Formik 
            initialValues={{id: ''}} 
            validationSchema={Yup.object().shape({
              id: Yup.string().required('Required'),
            })}
            onSubmit={async (values, {resetForm}) => {
                setIsLoading(true);
                await axios.delete(`${process.env.MARKER}${values.id}`,{
                    headers: {
                         Authorization: `Bearer ${token}`
                    }
                }).then(async (response:any) => {
                      setAdded(true);
                      resetForm()
                      await setIsLoading(false);
                      setTimeout(() => {
                        setAdded(false)
                      }, 2000)
                })
                .catch(async (error:any) => {
                    setIsError(true);
                    await setIsLoading(false);
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
                <form onSubmit={handleSubmit} className="md:ml-64 h-full md:px-48 md:pt-20 flex items-center flex-col">
                    <div className="w-80 md:w-full max-w-2xl">
                    {isError && (
                      <AlertError message="The id you specified is not correct"/>
                    )}
                    {added && (
                      <SendCorrect message="Delete successfully"/>
                    )}
                    <div className="flex items-center flex-col ">
                    <svg className="w-24 h-24 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>
                      <h1 className="text-center mb-20 mt-5 font-black dark:text-gray-100 tracking-tight md:text-6xl text-5xl">Delete BookMark</h1>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="title">
                          ID
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="6191768cca95d4589b67aa87" value={values.id} onChange={handleChange('id')}/>
                        {errors && errors.id && (
                              <FieldHelper mensaje="Please select a id"/>
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
                                isLoading ? 'Removing' : 'Remove'
                            }
                        </ButtonLogin>
                      </div>
                  </div>
                </form>
            )}
            </Formik>
    )
}
