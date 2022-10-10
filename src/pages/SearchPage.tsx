import MetaData from './MetaData';
import './search.css';
import SearchProduct from './search';


export const SearchPage = () => {
  return (
    <>
      <MetaData title="Search" />
      <div className="searchpage">
      <SearchProduct />
      </div>
    </>
  );
};

export default SearchPage;
