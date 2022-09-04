import express from "express"
import cors from "cors"
import { houseData, residentsData } from './data'

const app = express()
app.use(cors())
app.use(express.json())

const port = 3001
let residents=residentsData
 let houses= houseData 
app.get('/home', (req, res) => {
    res.send(`
    <h1>House/Residents API</h1>
    <h2>Available resources:</h2>
    <ul>
      <li><a href="/houses">Houses</a></li>
      <li><a href="/residents">Residents</a></li>
    </ul>
  `)
   
})
app.get(`/residents`, (req,res)=>{
    let residentsToSend = residents.map(resident=> {
        let foundHouse = houses.find(house => resident.houseId=== house.id)
        return { ...resident, foundHouse }
    })
  res.send(residentsToSend)
})

app.get(`/house`, (req,res)=>{
    let houseToSend= houses.map(house=>{
        let foundRezident= residents.filter(resident=> resident.houseId===house.id)
        return{...house , residents: foundRezident}
    })
    res.send(houseToSend)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})