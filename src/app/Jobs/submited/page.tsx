'use client'

import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { useRouter } from 'next/navigation'
import { Button } from '@/app/components/Button'

export default function SubmitedPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-[#5b88a5]">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
      />
      <div className="w-[350px] text-center bg-white p-4 flex flex-col gap-2">
        <div>
          <h2 className="text-2xl font-bold">Parabéns!</h2>
        </div>
        <div>
          <p className="text-xl mb-4">Seu currículo foi enviado com sucesso.</p>
          <p className="text-muted-foreground">
          Obrigado por reservar um tempo para compartilhar suas qualificações conosco. Analisaremos sua inscrição e entraremos em contato com você em breve.
          </p>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => router.push('/')}>
            Voltar para tela inicial
          </Button>
        </div>
      </div>
    </div>
  )
}