import React from 'react'
import { ListOfPosts } from './[id]/ListOfPosts'

export default async function PostPage ({ params }) {
  return (
    <section>
      <ListOfPosts />
    </section>
  )
}
