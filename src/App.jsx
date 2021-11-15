import React from 'react';
import Cards from './Cards';
import data from './sdata';

const App = () => (
  <>  
<h1 className="heading">TOP 10 NETFLIX SERIES IN 2021</h1>
{data.map((value) => {
        return (
            <Cards
                key={value.id}
                imagesrc={value.imagesrc}
                sname={value.sname}
                title={value.title}
                link={value.link}
            />
        );
    })}
    </>

);

export default App;