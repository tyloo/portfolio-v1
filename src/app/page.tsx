import Intro from '@/components/sections/intro'

export default async function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <div className='min-w-full'>
          <h1 className='text-center font-mono text-3xl text-blue-500 text-muted-foreground lg:text-6xl'>
            Coming soon™...
          </h1>
        </div>
      </div>
    </section>
  )
}
