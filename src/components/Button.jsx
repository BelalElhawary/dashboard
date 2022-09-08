import React from 'react'

const Button = ({height, width, bgColor, color, size, text, borderRadius, className, onClick}) => {
  return (
    <button type='button' onClick={onClick} style={{lineHeight: height, backgroundColor: bgColor, color, borderRadius, paddingLeft: width, paddingRight: width}} className={`text-${size} p-3 hover:drop-shadow-xl ${className}`}>
      {text}
    </button>
  )
}

export default Button