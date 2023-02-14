type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState } from "react"

import { BsSearch } from 'react-icons/bs'

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("")

  return (
    <div>
        <h2>Busque por um usuario</h2>
        <p>Conheca seus melhores repositorios</p>
        <div>
            <input 
              type="text" 
              placeholder="Digite o nome do usuario"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() =>loadUser(userName)}>
                <BsSearch />
            </button>
        </div>    
    </div>
  )
}

export default Search