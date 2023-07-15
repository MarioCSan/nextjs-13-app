import React from 'react'
import { LikeButton } from './LikeButton.jsx'
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <h1 style={{ color: '#E5C136' }}>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton id={post.id}>Me gusta</LikeButton>
    </article>
  ))
}
