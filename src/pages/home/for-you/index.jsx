import React, { useState } from 'react'
import { Post } from '~/components/post'
import { posts  as postData} from '~/mock/posts'
import { WVList } from 'virtua'

export const ForYou = () => {
    const [post, setPost] = useState([...postData,])
   
  return (
    <WVList
    onRangeChange={(start,end) =>{

        if(end + 1 == post.length){
            setPost(prev => [...prev, ...postData])
        }
    }}  
    >

        
      
        {
        
            post?.map((post,idx) => {
                return <Post key={idx} post={post} />
            })
        }
    </WVList>
  )
}
