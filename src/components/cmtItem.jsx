import React from 'react'

import style from '@/components/style'

export default function Cmtitem(props){
    return <div style={style.item}>
      <h1 style={style.user}>评论人:{props.user}</h1>
      <p>评论内容:{props.content}</p>
    </div>
  }