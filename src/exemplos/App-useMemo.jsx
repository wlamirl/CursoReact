import P from 'prop-types';
import './App.css';
import { useMemo, useEffect, useState } from 'react';

/* Demonstrando o uso do useMemo */

//Componente Post
const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className='post'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

// Post é do tipo objeto, toda vez que for um objeto, usamos "shape"
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou');

  // Component did mount
  useEffect(() => {
    //para visualizar que o render ocorre 2x, colocamos a função setTimeout
    // ocorre 2x o render porque a função fetch é assíncrona
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className='App'>
      {/*
      Como exemplo, foi incluido um input para demonstrar que todas vez que
      ocorre um change, todos os componentes da página serão renderizados, esse
      é um caso onde usaria o memo (preciso de um input e não quero que a página
        renderize novamente).
      */}
      <p>
        <input
          type='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {/* Para resolver o problema da renderização a qualquer change, envolvemos
      toda os posts pelo useMemo
      */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
