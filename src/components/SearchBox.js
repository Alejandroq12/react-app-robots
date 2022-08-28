import React from 'react';

const SearchBox = ({searchfield, searchchChange}) => {
    return (
        <div className='pa2'>
         <input
           className='pa3 ba b--green bg-lightest-blue' 
           type='search' 
           placeholder='search robots' 
           onChange={searchchChange}
        />
        </div>

    );
}

export default SearchBox;