import React from 'react'
import {withJob} from 'react-jobs'
import axios from 'axios'
import Helmet from 'react-helmet'
import NotFoundPage from 'shared/components/NotFoundPage'

const enhance = withJob({
  work: () => (
    axios.get('http://localhost:4000/api/content?notFound=true')
      .then(res => res.data)
      .catch(err => ({status: err.response.status}))
  ),
  LoadingComponent: () => <div>woooooo</div>,
  ErrorComponent: () => <NotFoundPage />,
})

const Component = ({jobResult}) => {
  console.log('Page', jobResult)

  if (jobResult.status) {
    return <NotFoundPage />
  }

  const {
    content: {
      title,
      paragraphs,
    },
  } = jobResult

  return (
    <main>
      <Helmet>
        <title>{jobResult.title}</title>
      </Helmet>

      <h1>{title}</h1>

      <article>
        {paragraphs.map((paragraph, i) =>
          <p key={i}>{paragraph}</p>
        )}
      </article>
    </main>
  )
}

export default enhance(Component)
