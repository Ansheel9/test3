import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{EnvVars.SITE_NAME}</title>
                <meta
                    name="description"
                    content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
                />
            </Head>
            <HomepageWrapper>
                <WhiteBackgroundContainer>
                    <Hero />
                    <Partners />
                    <BasicSection imageUrl="/demo-test1.png" title="INVESTING IS BETTER WITH FRIENDS" overTitle="Discuss">
                        <h5>Investing Gone Social</h5>
                        <p>
                        Create private chats with your gang, see what your friends are investing in, get instant data-rich insights as you discuss and share ideas with each other.
                        Psst...We do not disclose your Investment Amount to anyone.
                        </p>
                    </BasicSection>
                    <BasicSection imageUrl="/demo-test1.png" title="CREATE, COPY AND SHARE YOUR STOCK PLAYLISTS" overTitle="Collaborate" reversed>
                        <h5>More Companies, Less Risk</h5>
                        <p>
                        Create your own playlist of stocks, make one with your group or just find investors you believe in. Reduce risk, invest across different companies so you're not putting all your eggs in one basket, literally.
                        </p>
                    </BasicSection>
                        <BasicSection imageUrl="/demo-test1.png" title="INVEST IN WHAT YOU BELIEVE IN, WITH AS LOW AS ₹50" overTitle="Invest">
                        <h5>Invest in US Companies, Indian Companies, ETFs and Mutual Funds.</h5>
                        <p>
                        Now own a Tesla, Apple or Netflix Stock with as low as ₹50 or invest in that hot IPO you have been waiting for.
                        </p>
                    </BasicSection>
                    <BasicSection imageUrl="/demo-test1.png" title="WIN UPTO ₹1 LAKH EVERY WEEK" overTitle="Win" reversed>
                        <h5> Earn tokens with every investment you make, ₹1 = 1 token. </h5> 
                        <p>
                        Participate with the tokens in weekly games or win by showing off your group's investing power on the weekly leaderboard.
                        </p>  
                    </BasicSection>
                    <BasicSection imageUrl="/demo-test1.png" title="(L)EARN MONEY" overTitle="Earn">
                        <h5>Don't worry, we do the hard work. </h5> 
                        <p>
                        It’s hard to get time from your busy schedule. We get it. Get insights in a bite-sized form. Stay on top with the latest news. Discuss it with friends. All at one place.
                        </p>
                    </BasicSection>
                    
                </WhiteBackgroundContainer>
                <DarkerBackgroundContainer>
                    <Cta />
                    <FeaturesGallery />
                    <Features />
                    <Testimonials />
                    <ScrollableBlogPosts posts={posts} />
                </DarkerBackgroundContainer>
            </HomepageWrapper>
        </>
    );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
