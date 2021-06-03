import express from 'express';
import { readFileSync } from 'fs'

//creates a router and responds with all the data in data.json file
const router = express.Router();
router.get('/', (req, res) => {
  //'readFileSync' returns the contents of the path
  res.send(JSON.parse(readFileSync('./server/data.json')))
})


export default router;