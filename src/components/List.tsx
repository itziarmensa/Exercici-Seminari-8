import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}

const List= ({subs}: Props) => {

    const renderList = (): JSX.Element[] => {
        return subs.map(sub => {
            return(
              <li key={sub.name}>
              <img src={sub.avatar} alt={`Avatar for ${sub.name}`} />
              <h4>{sub.name} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
              <h4>{sub.money}</h4>
            </li>
            )
          })
    }


    return(
        <ul>
          {renderList()}
        </ul>
    )
}

export default List