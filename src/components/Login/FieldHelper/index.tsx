import React from 'react'
interface FieldHelperTypes{
    mensaje: String;
  }
export const FieldHelper = ({mensaje}:FieldHelperTypes) => {
    return (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {mensaje}
        </span>
    )
}
