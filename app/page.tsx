"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <p>code-bYtes-mui</p>
      <Button
        variant="contained"
        onClick={() => router.push('/code-bytes')}>
        code-bYtes
      </Button>
    </>
  )
}
