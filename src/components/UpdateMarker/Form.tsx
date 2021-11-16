import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonLogin } from '@components/Login/ButtonLogin';
import {FieldHelper} from '@components/Login/FieldHelper';
import { getToken } from 'src/services/token';
import { SvgCircle } from '@components/Login/SvgCircle';
import { AlertError } from '@components/Login/AlertError';
import { SendCorrect } from '@components/NewMarker/SendCorrect/SendCorrect';
const axios = require('axios');
export const Form = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [added, setAdded] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const token = getToken('access-token')
    return (
        <Formik 
            initialValues={{title: '', id: '', pathinit: '1', pathfinish: ''}} 
            validationSchema={Yup.object().shape({
              id: Yup.string().required('Required'),
              title: Yup.string().required('Required'),
              pathfinish: Yup.string().required('Required'),
              pathinit: Yup.string().required('Required'),
            })}
            onSubmit={async (values, {resetForm}) => {
                setIsLoading(true);
                await axios.put(`${process.env.MARKER}${values.id}`, {
                    abstract: values.title,
                    id: values.id,
                    path: `${values.pathinit};${values.pathfinish}`
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Accept-Encoding': 'gzip, deflate, br',
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
                      <AlertError message="The id is a unique field, please select another"/>
                    )}
                    {added && (
                      <SendCorrect message="The marker has been added"/>
                    )}
                    <div className="flex items-center flex-col ">
                        <svg className="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                        <h1 className="text-center mb-20 mt-5 font-black dark:text-gray-100 tracking-tight md:text-6xl text-5xl">Update BookMark</h1>
                    </div>
                      <div className="mb-4">
                      <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="title">
                          BookName - Update
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Padre Rico, Padre Pobre" value={values.title} onChange={handleChange('title')}/>
                        {errors && errors.title && (
                              <FieldHelper mensaje="Please enter a user."/>
                        )}
                      </div>
                      <div className="mb-4">
                      <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="title">
                          ID
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="6191768cca95d4589b67aa87" value={values.id} onChange={handleChange('id')}/>
                        {errors && errors.id && (
                              <FieldHelper mensaje="Please enter a id"/>
                        )}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                          Initial Path Page - Update
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="intialpage" type="number" placeholder="120" value={values.pathinit} onChange={handleChange('pathinit')}/>
                        {errors && errors.pathinit && (
                            <FieldHelper mensaje="You need a NUMBER of the initial path page for the mark"/>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                          Final Path Page - Update
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="finalpage" type="number" placeholder="120" value={values.pathfinish} onChange={handleChange('pathfinish')}/>
                        {errors && errors.pathfinish && (
                            <FieldHelper mensaje="You need a NUMBER of the last path page for the mark"/>
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
                                isLoading ? 'Updating' : 'Update'
                            }
                        </ButtonLogin>
                      </div>
                  </div>
                </form>
            )}
            </Formik>
    )
}
