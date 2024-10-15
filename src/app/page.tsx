import Intro from '@/components/sections/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Home() {
  const content = `
    # This is a markdown heading
  `

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <MDXRemote source={content} />
      </div>
    </section>
  )
}
