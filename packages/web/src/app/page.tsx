'use client'

import { useCallback } from 'react'
import Button from '@/components/Button'

const Home = () => {
  const handleClick = useCallback(() => {
    console.log('helloWorld')
  }, [])

  return (
    <div className="flex justify-center">
      <main className="container m-4 flex gap-2">
        <Button className="rounded-2xl" onClick={handleClick}>
          Click me
        </Button>
        <Button onClick={handleClick} variant="outline">
          Click me
        </Button>
      </main>
    </div>
  )
}

export default Home
