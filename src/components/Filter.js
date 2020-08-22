import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { setFilterValue } from '../actions';

const Filter = () => {
  const [ filterValue, setFilterValueLocal ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFilterValueLocal(e.target.value);
    setIsLoading(true);
  }

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      dispatch(setFilterValue(filterValue));
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(typingTimeout);
    }
  }, [ filterValue ]);

  return (
    <div className="header__search">
      <Search
        loading={isLoading}
        onSearchChange={handleInputChange}
        value={filterValue}
        showNoResults={false}
        placeholder='Search companies by name'
      />
    </div>
  )
};

export default Filter;
