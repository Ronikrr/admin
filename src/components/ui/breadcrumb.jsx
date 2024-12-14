import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation();
    const pathename = location.pathname.split('/').filter((x) => x);

    const capitalizeWords = (str) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    return (



        <span>
            <nav aria-label='breadcrumb' className='text-black' >
                <ol className="flex space-x-2">
                    <li>
                        <Link to='/' className='capitalize hover:underline' >dashboard /</Link>
                    </li>
                    {pathename.map((v, i) => {
                        const to = `/${pathename.slice(0, i + 3).join('/')}`;
                        const isLast = i === pathename.length - 1;
                        const disname = capitalizeWords(decodeURIComponent(v))
                        return (
                            <li key={to} className='flex items-center ' >
                                {isLast ? (
                                    <span area-current="page" className='capitalize font-medium hover:underline text-[rgb(80,60,224)]  ' >{disname}</span>
                                ) : (
                                    <Link to="" className='capitalize font-medium text-[rgb(80,60,224)] hover:underline ' >
                                        {disname}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </span>

    )
}

export default Breadcrumb