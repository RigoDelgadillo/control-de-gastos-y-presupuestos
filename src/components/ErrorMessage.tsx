import type { ReactNode } from "react"

type ErrorMessage = {
  children : ReactNode
}


export default function ErrorMessage({children} : ErrorMessage) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  )
}
