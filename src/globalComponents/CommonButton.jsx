import { Button } from 'antd'
import React from 'react'

const CommonButton = ({
    children,
    className,
    onClick,
    loading=false,
    disabled=false
}) => {
  return (
    <Button
        className={className}
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        >
            {children}
    </Button>
  )
}

export default CommonButton