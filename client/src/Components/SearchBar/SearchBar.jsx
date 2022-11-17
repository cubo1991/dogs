import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { searchRaza } from '../../Store/Actions'
import s from './SearchBar.module.css'

export const SearchBar = () => {
  let history = useHistory()
    let [search, setSearch] = useState('')
    let dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRaza(search))
        history.push('/home')
        
    }
    const onInputChange = (e) => {
setSearch(e.target.value)
    }
   
  return (
    <div>
        <form onSubmit={onSubmit}>
        <input className={s.search} type="text" onChange={onInputChange} value={search}/> 
        <input className={s.searchBtn} type="submit" value="Search" /> 
        </form>
    </div>
  )
}
