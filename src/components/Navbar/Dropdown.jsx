import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'


const Dropdown = ({lista}) => {
    
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const listaDrop = lista.map((categoria, indice) => 
          <NavLink key={indice} className='dropdown-item' to={`/category/${categoria}`}>{categoria}</NavLink>
        )
        setList(listaDrop) 
      }, [lista]);


    return (
        <>
            <div className="dropdown show">
                <a className="nav-link dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {list}
                </div>
            </div>
        </>
    );
}

export default Dropdown;


