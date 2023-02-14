type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { BsSearch } from 'react-icons/bs'

const Search = ({loadUser}: SearchProps) => {
  return (
    <div>
        <h2>Busque por um usuario</h2>
        <p>Conheca seus melhores repositorios</p>
        <div>
            <input type="text" placeholder="Digite o nome do usuario" />
            <button>
                <BsSearch />
            </button>
        </div>    
    </div>
  )
}

export default Search