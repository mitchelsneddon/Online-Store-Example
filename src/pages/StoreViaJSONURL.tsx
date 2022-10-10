import React, { useEffect, useState } from "react"
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
const AsyncAwait = () => {
  const [items, setItems] = useState<any[]>([])

  const fetchData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/mitchelsneddon/Online-Store-Example/main/src/data/items.json")

    const data = await response.json()
    setItems(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {items.length > 0 && (
        <>
        <h1 style={{ textAlign: "center", paddingBottom: "1rem", }}>Our Products Fetched From JSON</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
                  {items.map(item => (
                      <Col key={item.id}>
                          <StoreItem {...item} />
                      </Col>
                  ))}
              </Row>
              </>

      


      )}
    </div>
  )
}

export default AsyncAwait