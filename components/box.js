// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import Button from './button'

export default async function Box({ data }) {
  // const router = useRouter()
  return (
    <div className="shadow-xl w-[900px] h-[300px] rounded-lg flex flex-col justify-center items-center">
      <div className="mb-14">
        <h2 className="text-2xl text-center mb-6">{data.setup}</h2>
        <h1 className="text-3xl text-center">{data.punchline}</h1>
      </div>
      <Button />
    </div>
  )
}
