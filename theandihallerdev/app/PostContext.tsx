'use client'
 
import { createContext, useContext } from 'react'
 
export const BlogContext = createContext<Promise<any> | null>(null)
 
export function BlogProvider({
  children,
  blogPromise,
}: {
  children: React.ReactNode
  blogPromise: Promise<any>
}) {
  return (
    <BlogContext.Provider value={blogPromise}>{children}</BlogContext.Provider>
  )
}
 
export function useBlogContext() {
  let context = useContext(BlogContext)
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider')
  }
  return context
}