import { lazy, Suspense } from 'react'

const LazyLoad = (path) => {
  const Comp = lazy(() => import(`../pages/${path}`))
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Comp />
    </Suspense>
  )
}

export default LazyLoad