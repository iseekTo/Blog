import React from 'react'
import NextScript from 'next/script'
import { useLoaded } from 'utils/hooks'

const CommentByChirpy: React.FC = () => {
  const isLoaded = useLoaded()

  if (isLoaded) return null

  return (
    <NextScript
      defer
      src='https://chirpy.dev/bootstrap/comment.js'
      data-chirpy-domain='blog-tomoewi.vercel.app'
    />
  )
}

export default CommentByChirpy
