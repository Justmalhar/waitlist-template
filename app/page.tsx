"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import copyContent from "../data/copy.json"
import { FormEvent, useState } from "react"

export default function WaitlistPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(copyContent.config.webhookUrl, {
        method: "POST",
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setName("")
        setEmail("")
      } else {
        setSubmitStatus("error")
      }
    } catch (_error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[url('/background.avif')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-serif text-white mb-2 font-playfair">
          {copyContent.headerText}
        </h1>
        <h2 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight font-playfair">
          {copyContent.heroText}
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-playfair">
          {copyContent.bodyText}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="text"
            placeholder={copyContent.ctaText.nameLabel}
            className="bg-white/10 text-white placeholder:text-gray-400 border-white/20 font-playfair"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder={copyContent.ctaText.emailLabel}
            className="bg-white/10 text-white placeholder:text-gray-400 border-white/20 font-playfair"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 font-playfair disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : copyContent.ctaText.buttonText}
          </Button>
        </form>

        {submitStatus === "success" && (
          <p className="text-green-400 font-playfair">Thank you for joining the waitlist!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-400 font-playfair">Something went wrong. Please try again.</p>
        )}
      </div>
      
      <footer className="absolute bottom-4 text-gray-400 text-sm font-playfair">
        {copyContent.footerText}
      </footer>
    </div>
  )
}

