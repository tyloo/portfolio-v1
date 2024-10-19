import Image from 'next/image'
import authorImage from '@@/public/images/authors/julien-bonvarlet.jpg'

export default function Intro() {
  return (
    <section className='pb flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&apos;m Julien.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&apos;m a software engineer based in Paris, France.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I&apos;m passionated about learning new technologies and sharing
          knowledge with others.
        </p>
      </div>
      <div className='relative'>
        <Image
          src={authorImage}
          alt="Julien 'Tyloo' Bonvarlet"
          className='flex-1 rounded-lg'
          width={200}
          height={267}
          priority
        />
      </div>
    </section>
  )
}
