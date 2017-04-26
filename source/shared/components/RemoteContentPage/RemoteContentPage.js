import React from 'react'
import {withJob} from 'react-jobs'
import axios from 'axios'

const enhance = withJob({
  work: () => axios.get('http://localhost:4000/api/content')
    .then(res => res.data),
  LoadingComponent: () => <div>woooooo</div>,
})

const Component = ({
  jobResult: {
    content: {
      title,
      paragraphs,
    },
  },
}) => (
  <main>
    <h1>{title}</h1>

    <article>
      {paragraphs.map((paragraph, i) =>
        <p key={i}>{paragraph}</p>
      )}
    </article>
  </main>
)

export default enhance(Component)
