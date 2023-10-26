import React from 'react'
import Articles from './Article'
export default function ArticleList({posts}) {
    console.log(posts)
const arrayed=posts.map((item)=> <Articles key={item.id} title={item.title} date={item.date } preview={item.preview}/> )
  return (
    <main>
    {arrayed}
    </main>
  )
}
