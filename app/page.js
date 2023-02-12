import { Inter } from '@next/font/google'
import Box from '@/components/box'

// const inter = Inter({ subsets: ['latin'] })

async function getData() {
  const data = await fetch(
    `https://official-joke-api.appspot.com/random_joke`,
    { cache: 'no-store' }
  )
  const res = await data.json()
  return res
}

export default async function Home() {
  const res = await getData()
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-[50px] font-light mb-20 text-cyan-700">
        PUNCHLINE JOKES
      </h1>
      <Box data={res} />
    </main>
  )
}
