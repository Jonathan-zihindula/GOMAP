import React from 'react'
// import Search from './Search'
import Options from './option';

const Header = ({ searchResult }) => {
    return (
        <div>
            <div className='flex justify-center absolute top-2 z-10 w-screen left-0 right-0'>
                {/* <Search getResult={searchResult}/> */}
                <Options/>
            </div>
        </div>
    );
}

export default Header
