import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonLogin } from '@components/Login/ButtonLogin';
import {FieldHelper} from '@components/Login/FieldHelper';
import { getToken } from 'src/services/token';
import { SvgCircle } from '@components/Login/SvgCircle';
import { AlertError } from '@components/Login/AlertError';
import { SendCorrect } from './SendCorrect/SendCorrect';
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
                await axios.post(`${process.env.MARKER}`, {
                    abstract: values.title,
                    'resource-type': "chapter",
                    "resource-id": values.id,
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
                      <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                      <h1 className="text-center mb-20 mt-5 font-black dark:text-gray-100 tracking-tight md:text-6xl text-5xl">New BookMark</h1>
                    </div>
                      <div className="mb-4">
                      <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="title">
                          BookName
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Padre Rico, Padre Pobre" value={values.title} onChange={handleChange('title')}/>
                        {errors && errors.title && (
                              <FieldHelper mensaje="Please enter a user."/>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="id">
                          ID
                        </label>
                        <div className="relative">
                          <select className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="id" value={values.id} onChange={handleChange('id')}>
                            <option selected>Select a ID</option>
                            <option value="6165066067980eee183accf1">ID1</option>
                            <option value="613be60465f0f6cf7361f270">ID2</option>
                            <option value="613bda7065f0f6cf7361f252">ID3</option>
                            <option value="613bbe7365f0f6cf7361f1f0">ID4</option>
                            <option value="613b8d6065f0f6cf7361f196">ID5</option>
                            <option value="613b04af65f0f6cf7361f0ee">ID6</option>
                            <option value="61399a0d65f0f6cf7361ef12">ID7</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        {errors && errors.id && (
                              <FieldHelper mensaje="Please select a id"/>
                        )}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                          Initial Path Page
                        </label>
                        <input className="bg-white dark:bg-gray-700 dark:border-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="intialpage" type="number" placeholder="120" value={values.pathinit} onChange={handleChange('pathinit')}/>
                        {errors && errors.pathinit && (
                            <FieldHelper mensaje="You need a NUMBER of the initial path page for the mark"/>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="password">
                          Final Path Page
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
                                isLoading ? 'Adding' : 'Add'
                            }
                        </ButtonLogin>
                      </div>
                  </div>
                </form>
            )}
            </Formik>
    )
}
