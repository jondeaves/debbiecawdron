import React from 'react';

import IExperience from '../types/IExperience';

import ExperienceList from '../components/shared/ExperienceList';
import Layout from '../components/shared/Layout';
import Hero from '../components/shared/Hero';
import Info from '../components/shared/Info';
import SEO from '../components/shared/Seo';

export const AboutPage: React.FunctionComponent = () => {
  const aboutSummary = `Having recently completed my ﬁnal design thesis as part of my
    Dip. Arch at the Mackintosh School of Architecture here in Glasgow, I
    am seeking an entry level position as a part I Architectural Assistant
    in a firm that's looking for a forward thinking, fast and efficient,
    capable addition, with a vast portfolio of project works and knowledge
    within my educational studies. Offering an excellent blend of
    technical aptitude and creative ability, experience in dealing with
    customer relations and high intensity workloads within strict
    deadlines, I am a highly committed, reliable, trustworthy and vastly
    enthusiastic in taking on new challenges and skill-sets.`;

  const work: IExperience[] = [
    {
      location: 'Glasgow School Of Art Thesis year',
      title: 'BAFDA',
      subTitles: ['2016 Professional Practices'],
      descriptions: [
        'An insight in to dealing with clients in a professional market.',
        'Skills acquired - Presenting a brand, communication with clients, problem solving, brieﬁng, working to deadlines, responsibility.',
      ],
    },
    {
      location: 'Glasgow School of Art Honours year',
      title:
        'The Creative City, Connecting People, Place and Identity in Glasgow and Portland',
      subTitles: ['2015 Dissertation'],
      descriptions: [
        'An in depth study of both Portland and Glasgow in terms of their creative attributes, strengths and weaknesses. The study explores creativity in the urban realm, why this has become important to these cities of today, and how it can be used as a means to respond to the issues and challenges of the 21st century. The book has since been published as well as presented at the New Glasgow Society and currently for sale on Amazon.',
      ],
    },
    {
      location: 'Glasgow School of Art',
      title: 'Transatlantic Sessions',
      subTitles: ['2015 Dissertation'],
      descriptions: [
        'As part of ‘The Creative City’, I participated in a session at the Glasgow School of Art where professors and professionals attended a talk put on by myself and fellow students on our published book.',
        'Skills acquired - Presenting a positive personal image, communication, public speaking, persuading and inﬂuencing.',
      ],
    },
    {
      location: 'Glasgow School of Art',
      title: 'InterACT',
      subTitles: ['2013'],
      descriptions: [
        'A project in collaboration with Glasgow Housing Association analysing  data in aim of providing low cost environmental housing.',
        'Skills acquired - Analysing data, editing, reporting, self reliance.',
      ],
    },
  ];

  const education: IExperience[] = [
    {
      location: 'Glasgow School Of Art',
      title: 'Mackintosh School of Architecture',
      subTitles: ['DIPLOMA SEPT 2015 - JUNE 2016'],
      descriptions: [],
    },
    {
      location: 'Glasgow School Of Art',
      title: 'Mackintosh School of Architecture',
      subTitles: ['HONOURS SEPT 2014 - JUNE 2015'],
      descriptions: [],
    },
    {
      location: 'Glasgow School Of Art',
      title: 'Mackintosh School of Architecture',
      subTitles: ['BACHELORS SEPT 2010 - JUNE 2013'],
      descriptions: [],
    },
    {
      location: 'Glasgow',
      title: 'Williamwood High School',
      subTitles: [
        '4 ADVANCED HIGHERS AUG 2009 - JUNE 2010',
        '5 HIGHERS AUG 2008 - JUNE 2009',
        '9 INTERMEDIATE II’s AUG 2006 - JUNE 2008',
      ],
      descriptions: [],
    },
  ];

  return (
    <Layout isHomepage={true}>
      <SEO template="%s" />

      <Hero title="Deborah Cawdron" subTitle="Part 1 architectural assistant" />
      <Info title="About Me" info={aboutSummary} />
      <ExperienceList title="Experience" items={work} />
      <ExperienceList title="Education" items={education} />
    </Layout>
  );
};

export default AboutPage;
