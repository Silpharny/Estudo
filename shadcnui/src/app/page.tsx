"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  )
}
