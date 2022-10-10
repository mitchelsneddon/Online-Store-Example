import React,{useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';
function SearchProduct() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className="SearchProduct">
        <h1>Search Our Products</h1>
      <input className='searchbar' type="text" placeholder="Enter Product Name" onChange={e=>setSearchTerm(e.target.value)} />
      <Row md={2} xs={1} lg={3} className="g-3">
      {storeItems.filter((val)=>{
        if(searchTerm == ""){
          return 
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return <div>      
          <Col key={val.id}>
            <StoreItem {...val} />
          </Col>
             </div>
      })}
      </Row>
    </div>
  );
}
export default SearchProduct;