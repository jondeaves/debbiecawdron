import React from 'react';

import IExperience from '../types/IExperience';

import useAboutRenderImage from '../hooks/useAboutRenderImage';
import useAboutSectionImage from '../hooks/useAboutSectionImage';

import Contact from '../components/shared/Contact';
import ExperienceList from '../components/shared/ExperienceList';
import Hero from '../components/shared/Hero';
import Info from '../components/shared/Info';
import Layout from '../components/shared/Layout';
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
      descriptions: [
        'An insight in to dealing with clients in a professional market.',
        'Skills acquired - Presenting a brand, communication with clients, problem solving, brieﬁng, working to deadlines, responsibility.',
      ],
      location: 'Glasgow School Of Art Thesis year',
      subTitles: ['2016 Professional Practices'],
      title: 'BAFDA',
    },
    {
      descriptions: [
        'An in depth study of both Portland and Glasgow in terms of their creative attributes, strengths and weaknesses. The study explores creativity in the urban realm, why this has become important to these cities of today, and how it can be used as a means to respond to the issues and challenges of the 21st century. The book has since been published as well as presented at the New Glasgow Society and currently for sale on Amazon.',
      ],
      location: 'Glasgow School of Art Honours year',
      subTitles: ['2015 Dissertation'],
      title:
        'The Creative City, Connecting People, Place and Identity in Glasgow and Portland',
    },
    {
      descriptions: [
        'As part of ‘The Creative City’, I participated in a session at the Glasgow School of Art where professors and professionals attended a talk put on by myself and fellow students on our published book.',
        'Skills acquired - Presenting a positive personal image, communication, public speaking, persuading and inﬂuencing.',
      ],
      location: 'Glasgow School of Art',
      subTitles: ['2015 Dissertation'],
      title: 'Transatlantic Sessions',
    },
    {
      descriptions: [
        'A project in collaboration with Glasgow Housing Association analysing  data in aim of providing low cost environmental housing.',
        'Skills acquired - Analysing data, editing, reporting, self reliance.',
      ],
      location: 'Glasgow School of Art',
      subTitles: ['2013'],
      title: 'InterACT',
    },
  ];

  const education: IExperience[] = [
    {
      location: 'Glasgow School Of Art',
      subTitles: ['DIPLOMA SEPT 2015 - JUNE 2016'],
      title: 'Mackintosh School of Architecture',
    },
    {
      location: 'Glasgow School Of Art',
      subTitles: ['HONOURS SEPT 2014 - JUNE 2015'],
      title: 'Mackintosh School of Architecture',
    },
    {
      location: 'Glasgow School Of Art',
      subTitles: ['BACHELORS SEPT 2010 - JUNE 2013'],
      title: 'Mackintosh School of Architecture',
    },
    {
      location: 'Glasgow',
      subTitles: [
        '4 ADVANCED HIGHERS AUG 2009 - JUNE 2010',
        '5 HIGHERS AUG 2008 - JUNE 2009',
        '9 INTERMEDIATE II’s AUG 2006 - JUNE 2008',
      ],
      title: 'Williamwood High School',
    },
  ];

  const skills: IExperience[] = [
    {
      descriptions: [
        'Autocad Architecture',
        'Autocad',
        'Rhino',
        'Google Sketchup',
      ],
      title: 'Technical',
    },
    {
      descriptions: [
        'Adobe Photoshop',
        'Adobe InDesign',
        'Adobe Illustrator',
        'Adobe Publisher',
        'Microsoft Office',
      ],
      title: 'Conceptual',
    },
    {
      descriptions: [
        'Conceptual Drawing',
        'Technical Drawing',
        'Photography',
        'Model Making',
      ],
      title: 'Artistic',
    },
    {
      descriptions: [
        'Currently learning Revit and looking to learn Vectorworks',
      ],
    },
  ];

  const additional: IExperience[] = [
    {
      descriptions: [
        'British Driving License, Glasgow AUG 2011',
        'Publication, <em>The Creative City, Connecting People, Place and Identity in Glasgow and Portland</em>.',
      ],
    },
  ];

  const employment: IExperience[] = [
    {
      descriptions: [
        'Skills acquired - Collecting  data, prioritising, dealing with clients, telephone skills, negotiating and inﬂuencing.',
      ],
      location: 'Sales assistant',
      subTitles: ['MAY 2013 - JULY 2014'],
      title: 'Bon Marche',
    },
    {
      descriptions: [
        'Skills acquired - Organising, Cashﬂow, Working as a team.',
      ],
      location: 'Seasonal Sales assistant',
      subTitles: ['OCT 2012 - JAN 2013'],
      title: 'HMV',
    },
    {
      descriptions: [
        'kills acquired - Attention to quality, Presentation, sales, communicating.',
      ],
      location: 'Deli Assistant',
      subTitles: ['OCT 2010 - DEC 2012'],
      title: 'HMV',
    },
  ];

  const RenderImage = useAboutRenderImage();
  const SectionImage = useAboutSectionImage();

  return (
    <Layout isHomepage={true}>
      <SEO template="%s" />

      <Hero title="Deborah Cawdron" subTitle="Part 1 architectural assistant" />
      <Contact title="Contact" />

      {/* Left Content */}
      <Info title="About Me" info={aboutSummary} />
      <ExperienceList title="Experience" items={work} />
      <ExperienceList title="Education" items={education} />
      <SectionImage />

      {/* Right Content */}
      <ExperienceList title="Skills" items={skills} />
      <ExperienceList title="Additional Information" items={additional} />
      <ExperienceList title="Work History" items={employment} />

      {/* Bottom Content */}
      <RenderImage />
    </Layout>
  );
};

export default AboutPage;
