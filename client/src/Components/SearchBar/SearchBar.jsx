import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchRaza } from '../../Store/Actions'

export const SearchBar = () => {
    let [search, setSearch] = useState('')
    let dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRaza(search))
    }
    const onInputChange = (e) => {
setSearch(e.target.value)
    }
   
  return (
    <div>
        <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={search}/> 
        <input type="submit" value="Buscar" /> 
        </form>
    </div>
  )
}
