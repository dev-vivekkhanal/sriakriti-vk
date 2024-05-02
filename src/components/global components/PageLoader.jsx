import React from 'react'

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="animate-spin rounded-full border-t-4 border-gray-500 border-solid h-12 w-12"></div>
        </div>
    )
}

export default PageLoader