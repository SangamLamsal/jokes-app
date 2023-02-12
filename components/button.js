'use client'

import { useRouter } from 'next/navigation'

export default function Button() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.refresh()}
      className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-5 py-2 rounded-xl text-white"
    >
      Another One
    </button>
  )
}
