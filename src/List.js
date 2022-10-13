import React from 'react';
import Row from './Row';
import requests from './requests';

const List = () => {
  return (
    <div className='app'>
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending}/>
    </div>
  )
}

export default List;
