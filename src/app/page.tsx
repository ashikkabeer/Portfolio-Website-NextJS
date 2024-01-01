import Image from 'next/image';

export default function Home() {
  return (
    // <main className='dark bg-background text-primary flex min-h-screen flex-col items-center justify-between p-24'>
    <main className='font-mono dark bg-background text-primary flex min-h-screen flex-col items-center p-5 md:p-24'>
      <div className='nav font-bold  flex ml-4 justify-between'>
        <p className='text-4xl md:text-9xl '>Ashik Kabeer</p>
      </div>
      <p className='font-sm mt-4 md:mt-0'>
        <span className='text-primary'>
          Developer and Javascript enthusiast from India.
        </span>{' '}
        Im interested in ExpressJS, Node, Database, Typescript.
      </p>
      <p className='justify-start text-3xl pt-24'>About Ashik Kabeer</p>
      <p className='about mt-4'>
        Weekend Labs is a software consulting and investment collective based in
        Boston. Founded in 2021, Weekend Labs is a tight-knit collective of
        industry insiders, analysts, and innovators. We are open, collaborative,
        and use our collective experience, design and technical expertise to
        create meaningful and compelling content for all mediums. We take a
        hands-on approach to consulting in a way that truly feels like a
        business partner.
      </p>

      <p className='justify-start text-3xl pt-24'>My Backend Projects</p>
      <p className='about mt-4'>
        Weekend Labs is a software consulting and investment collective based in
        Boston. Founded in 2021, Weekend Labs is a tight-knit collective of
        industry insiders, analysts, and innovators. We are open, collaborative,
        and use our collective experience, design and technical expertise to
        create meaningful and compelling content for all mediums. We take a
        hands-on approach to consulting in a way that truly feels like a
        business partner.
      </p>
    </main>
  );
}
