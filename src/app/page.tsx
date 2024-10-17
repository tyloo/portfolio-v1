import Intro from '@/components/sections/intro'
import RecentPosts from '@/components/sections/recent-posts'
import RecentProjects from '@/components/sections/recent-projects'

export default async function HomePage() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />

        <RecentProjects />
      </div>
    </section>
  )
}
