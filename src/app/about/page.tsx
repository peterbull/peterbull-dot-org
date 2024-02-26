import React from 'react'
import Section from '@/components/Section'

export default function About(): JSX.Element {
  return (
    <Section title='About'>
      <div className='About'>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Hi, my name is Peter Bull, a BIM manager and computational designer
          transitioning into software engineering.
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          My professional journey is rooted in applying innovative computational
          methods to enhance construction projects, with expertise in
          programming (Python, JavaScript), design software (Revit, Rhino), and
          modern tech frameworks (React, FastAPI, Airflow, Kafka).
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Outside work, I find balance in surfing, gardening with my partner
          (just wrapping up their PhD in Machine Learning and Intentionality),
          lifting weights, and enjoying my role as the resident 'really good
          everyday chef'
        </p>
      </div>
    </Section>
  )
}
