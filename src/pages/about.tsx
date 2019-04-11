import React from 'react';

import Container from '../components/shared/Container';
import Layout from '../components/shared/Layout';
import SEO from '../components/shared/Seo';

export const AboutPage: React.FunctionComponent = () => {
  return (
    <Layout isHomepage={true}>
      <SEO template="%s" />

      <Container type="section" flow="column">
        <h1>Deborah Cawdron</h1>
        <h2>Part 1 architectural assistant</h2>
      </Container>

      <Container type="section" alignment="left" flow="column">
        <h3>About Me</h3>
        <p>
          Having recently completed my ﬁnal design thesis as part of my
          Dip. Arch at the Mackintosh School of Architecture here in Glasgow, I
          am seeking an entry level position as a part I Architectural Assistant
          in a firm that's looking for a forward thinking, fast and efficient,
          capable addition, with a vast portfolio of project works and knowledge
          within my educational studies. Offering an excellent blend of
          technical aptitude and creative ability, experience in dealing with
          customer relations and high intensity workloads within strict
          deadlines, I am a highly committed, reliable, trustworthy and vastly
          enthusiastic in taking on new challenges and skill-sets.{' '}
        </p>
      </Container>

      <Container type="section" alignment="left" flow="column">
        <h3>Experience</h3>

        <div>
          <h4>
            <strong>BAFDA</strong>, Glasgow School of Art <em>Thesis year</em>
          </h4>
          <h5>2016 Professional Practices</h5>
          <p>An insight in to dealing with clients in a professional market.</p>
          <p>
            Skills acquired - Presenting a brand, communication with clients, 
            problem solving, brieﬁng, working to deadlines, responsibility.
          </p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>
              The Creative City, Connecting People, Place and Identity in 
              Glasgow and Portland
            </strong>
            , Glasgow School of Art <em>Honours year</em>
          </h4>
          <h5>2015 Dissertation</h5>
          <p>
            An in depth study of both Portland and Glasgow in terms of  their
            creative attributes, strengths and weaknesses. The study  explores
            creativity in the urban realm, why this has become  important to
            these cities of today, and how it can be used as a  means to respond
            to the issues and challenges of the 21st century.  The book has
            since been published as well as presented at the New  Glasgow
            Society and currently for sale on Amazon. 
          </p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>Transatlantic Sessions</strong>, Glasgow School of Art{' '}
            <em>Honours year</em>
          </h4>
          <h5>2015 Dissertation</h5>
          <p>
            As part of ‘The Creative City’, I participated in a session at
            the Glasgow School of Art where professors and
            professionals attended a talk put on by myself and fellow students
            on our published book. 
          </p>
          <p>
            Skills acquired - Presenting a positive personal image,
            communication,  public speaking, persuading and inﬂuencing.
          </p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>InterACT</strong>, Glasgow School of Art{' '}
          </h4>
          <h5>2013</h5>
          <p>
            A collaboration project with students from engineering and quantity 
            surveying.
          </p>
          <p>
            Skills acquired - Presenting a brand, delegating, team managing, 
            brieﬁng, working to deadlines, responsibility. The project provided 
            invaluable insight in to all aspects of a design, including cost
            and  structure.
          </p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>Glasgow Passivhaus</strong>, Glasgow School of Art{' '}
          </h4>
          <h5>2012</h5>
          <p>
            A project in collaboration with Glasgow Housing Association
            analysing  data in aim of providing low cost environmental housing 
          </p>
          <p>
            Skills acquired - Analysing data, editing, reporting, self
            reliance. 
          </p>
        </div>
      </Container>

      <Container type="section" alignment="left" flow="column">
        <h3>Education</h3>

        <div>
          <h4>
            <strong>Mackintosh School of Architecture</strong>, Glasgow School
            Of Art
          </h4>
          <h5>DIPLOMA SEPT 2015 - JUNE 2016</h5>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>Mackintosh School of Architecture</strong>, Glasgow School
            Of Art
          </h4>
          <h5>HONOURS SEPT 2014 - JUNE 2015</h5>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>Mackintosh School of Architecture</strong>, Glasgow School
            Of Art
          </h4>
          <h5>BACHELORS SEPT 2010 - JUNE 2013</h5>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h4>
            <strong>Williamwood High School</strong>, Glasgow
          </h4>
          <h5>4 ADVANCED HIGHERS AUG 2009 - JUNE 2010</h5>
          <h5>5 HIGHERS AUG 2008 - JUNE 2009</h5>
          <h5>9 INTERMEDIATE II’s AUG 2006 - JUNE 2008</h5>
        </div>
      </Container>

      {/* <Container type="section" alignment="left" flow="column">
      </Container> */}

      {/* <Container type="section" alignment="left" flow="column">
      </Container> */}

      {/* <Container type="section" alignment="left" flow="column">
      </Container> */}

      {/* <Container type="section" alignment="left" flow="column">
      </Container> */}
    </Layout>
  );
};

export default AboutPage;
