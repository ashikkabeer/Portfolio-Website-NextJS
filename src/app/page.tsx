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
      Hello! Im Ashik Kabeer, a dedicated Node.js developer currently pursuing my B.Tech in computer science and engineering in India. With a knack for building scalable backend applications, Ive crafted a range of projects that reflect my commitment to innovation and clean coding practices. Beyond coding, I enjoy sharing my insights through technical content creation. As the Tech Lead of TinkerHub MCET Campus Community, I collaborate with like-minded individuals to foster a culture of innovation and learning. Whether youre interested in technology, Node.js, or just want to connect, Im always open to new opportunities and collaborations. Lets build something amazing together!
      </p>

      <p className='justify-start text-3xl pt-24'>My Backend Projects</p>
      <p className='about mt-4'>
        <ul>
          <li>Social Media App</li>

        </ul>
      </p>
    </main>
  );
}
