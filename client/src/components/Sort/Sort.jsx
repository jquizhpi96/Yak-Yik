import './Sort.css'

const Sort = (props) => {

  const handleChange = (event) => {
      props.onChange(event.target.value)
  }

  return (
      <form className="sort-container" onSubmit={props.handleSubmit}>
          <label className="sort" htmlFor="sort">SORT BY:</label>
          <select className="sort-select" onChange={handleChange}>
              <option className="option" value="likes-ascending" >&nbsp; Most Popular &nbsp;</option>
              <option value="likes-descending">&nbsp; Least Popular &nbsp;</option>
              
          </select>
      </form>
  )
}

export default Sort