import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadContracts } from '../store/slices/contracts'

import ManyContracts from '../components/contracts/ManyContracts'
import AddContract from '../components/contracts/AddContract'
import AddDocument from '../components/customComponents/AddDocument'
import ContractCard from '../components/contracts/ContractCard'
import { Grid } from '@mui/material'

export default function HomePage() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadContracts())
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>

      </Grid>
        <ManyContracts />
        <AddDocument />
    </Grid>
  )
}
