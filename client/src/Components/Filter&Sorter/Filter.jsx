import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments } from '../../Store/Actions'
export const Filter = () => {
    let dispatch = useDispatch()
    const [selectT, setSelectT] = React.useState({})
    let temperaments = useSelector((state) => state.temperamentos)
    React.useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])
    const onChangeFilter = (e) => {
setSelectT(...[e.target.value])
    }
    console.log(selectT)

    return (
        <select name="select" multiple= "true" onChange={onChangeFilter}>
            {temperaments.map(t =>
                <option  value={t.NameT}>{t.NameT}</option>
            )};
        </select>
    )
}

