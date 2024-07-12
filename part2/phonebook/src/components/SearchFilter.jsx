
const SearchFilter = ({ filterName, handleFilterName }) => {
    return (
      <div>
        Filter names containing: <input value={filterName} onChange={handleFilterName} />
      </div>
    )
  }

  export default SearchFilter;