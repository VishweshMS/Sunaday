import { BsArrowUpCircleFill } from "react-icons/bs";
import ContainerBlock from '@/components/ContainerBlock'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

export default function HomePage() {
  return (
    <ContainerBlock>
      <div className="h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
        <div id="hero" className="h-16"></div>
        <section className="snap-start">
          <Hero />
        </section>

        <div id="skills" className="h-16"></div>
        <section className="snap-start">
          <Skills />
        </section>

        <div id="achievements" className="h-16"></div>
        <section className="snap-start">
          <Achievements />
        </section>

        <div id="contact" className="h-16"></div>
        <section className="snap-start">
          <Contact />
        </section>
      </div>

      <a href="#hero" className="fixed right-6 bottom-6 text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
        <BsArrowUpCircleFill className="w-8 h-8" />
      </a>
    </ContainerBlock>
  )
}