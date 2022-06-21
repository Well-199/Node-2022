import { useState, useEffect } from "react"
import { PostForm } from './components/PostForm'
import { PostItem } from './components/PostItem'
import { Post } from './types/Post'
import { api } from './api'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {

    setLoading(true)
    let json = await api.getAllPost()
    setLoading(false)
    setPosts(json)

  }

  const handleAddPost = async (title: string, body: string) => {

    let json = await api.addNewPost(title, body, 1)

    console.log(json)

    if(json.id){
      alert('Post adicionado com sucesso')
    }
    else{
      alert('Erro ao enviar dados, tente novamente')
    }
    
  }

  return (
    <div>

      {loading &&
        <div>
          <h1>Carregando...</h1>
        </div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && 
      <>
        <h2>Total de posts: {posts.length}</h2>

        <div>
          {posts.map((item, index) => 
            <PostItem data={item} key={index}/>
          )}
        </div>
      </>
      }
    </div>
  )
}

export default App
