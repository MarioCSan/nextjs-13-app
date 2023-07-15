import React from 'react'
import { LikeButton } from './LikeButton.jsx'
import Link from 'next/link.js'
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: 120000
  })
    .then((res) => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href="/posts/[id]" as={`./posts/${post.id}`}>
        <h1 style={{ color: "#E5C136" }}>{post.title}</h1>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id}>Me gusta</LikeButton>
    </article>
  ))
}
