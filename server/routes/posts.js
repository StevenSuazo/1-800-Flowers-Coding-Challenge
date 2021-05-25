import express from 'express';
import { readFileSync } from 'fs'

const router = express.Router();

router.get('/', (req, res) => {
  res.send(JSON.parse(readFileSync('./server/data.json')))
})


export default router;