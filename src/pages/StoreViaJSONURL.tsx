import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [items, setItems] = useState<any[]>([])

  const fetchData = async () => {
    const response = await fetch("url")

    const data = await response.json()
    setItems(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AsyncAwait