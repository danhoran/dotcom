import Heading from '../components/heading';
import Layout from '../components/layout';
import Lead from '../components/lead';

const About = () => (
    <Layout>
        {/* <Logo /> */}
        <Lead>
            Hey, I'm Dan Horan &mdash; a leader, and developer currently living in London, England. I used to write code for a living, now I lead software engineering teams at Ocado Technology &mdash; building amazing things for people all over the world.
        </Lead>
        <Heading>Fun projects</Heading>
        <br />
        <br />
        <p><strong>velocity</strong> https://pace.sh&#8689;</p>
        <p>Better insights into software development team performance</p>
        <br />
        <Heading>Experience</Heading>
        <br />
        <br />
        <p><strong>Development Manager</strong> December 2017 &mdash; present</p>
        <p>Ocado Technology</p>
        <br />
        <p><strong>Team Lead</strong> December 2017 &mdash; present</p>
        <p>Ocado Technology</p>
        <br />
        <p><strong>Senior Software Engineer</strong> December 2017 &mdash; present</p>
        <p>Ocado Technology</p>
        <br />
        <p><strong>Software Engineer</strong> December 2017 &mdash; present</p>
        <p>Ocado Technology</p>
        <br />
        <p><strong>Software Engineer</strong> December 2017 &mdash; present</p>
        <p>Freelance</p>
        <br />
        <p><strong>Verification Engineer</strong> December 2017 &mdash; present</p>
        <p>Anritsu</p>
        <br />
        <Heading>Writing</Heading>
    </Layout>
);

export default About;
