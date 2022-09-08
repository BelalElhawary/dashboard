import React from 'react'
import { Header, Post } from '../components'


const Community = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Community' />
      <div>
        <div>Add New Post</div>
        <Post user={{name: 'Belal', photo: 'https://i.pinimg.com/736x/1f/51/03/1f51038bd5af319dd132a3fab9ee3b57.jpg'}} text='hi from other world' date='10/50/2008' photo='https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png' reacts={{funny: 10, sad: 10, love: 10, like: 10}}/>
        <Post user={{name: 'Belal', photo: 'https://i.pinimg.com/736x/1f/51/03/1f51038bd5af319dd132a3fab9ee3b57.jpg'}} text='hi from other world' date='10/50/2008' photo='https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png' reacts={{funny: 10, sad: 10, love: 10, like: 10}}/>
        <Post user={{name: 'Belal', photo: 'https://i.pinimg.com/736x/1f/51/03/1f51038bd5af319dd132a3fab9ee3b57.jpg'}} text='hi from other world' date='10/50/2008' photo='https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png' reacts={{funny: 10, sad: 10, love: 10, like: 10}}/>
        <Post user={{name: 'Belal', photo: 'https://i.pinimg.com/736x/1f/51/03/1f51038bd5af319dd132a3fab9ee3b57.jpg'}} text='hi from other world' date='10/50/2008' photo='https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png' reacts={{funny: 10, sad: 10, love: 10, like: 10}}/>
        <Post user={{name: 'Belal', photo: 'https://i.pinimg.com/736x/1f/51/03/1f51038bd5af319dd132a3fab9ee3b57.jpg'}} text='hi from other world' date='10/50/2008' photo='https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png' reacts={{funny: 10, sad: 10, love: 10, like: 10}}/>

      </div>
    </div>
  )
}

export default Community