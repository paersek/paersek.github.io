import {
  Container,
  Embed,
  Image,
  SectionTitle,
  VimeoEmbed
} from 'app/components';
import DavidImage from 'app/images/DavidWordMarkWithField20.png';
import DavidImage2 from 'app/images/PeakSeasonPoster_WEB_5-21v5.png';

export const metadata = {
  title: 'Paersek'
};

export default function HomePage() {
  return (
    <Container orientation="vertical" gap={100}>
      <Container orientation="vertical" gap={10}>
        <Embed
          src="https://mentalcanvas.com/vm/tr7fbzu/scene/"
          style={{ aspectRatio: '9 / 13' }}
        />
        <Image src={DavidImage} alt="David" />
        <Image src={DavidImage2} alt="David" />
      </Container>
      
      import React from 'react';

export default function PressLink() {
  return (
    <Container orientation="vertical" gap={0}>
      <div>PRESS:</div>
      <a
        href="https://collider.com/peak-season-movie-review/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Collider: Peak Season Movie Review
      </a>
    </Container>
  );
}
       
      <Container orientation="vertical" gap={10}>
        <VimeoEmbed
          title="Directing Reel"
          videoId="827763770"
          type="landscape"
        />
      </Container>

      <Container orientation="vertical" gap={10}>
        <VimeoEmbed
          title="TikTok Creative Studio Marketing Reel - Lead Editor"
          videoId="776837738"
          type="landscape"
        />
      </Container>
       <Container orientation="vertical" gap={0}>
          <div>PRESS:</div>
          <a
            href="https://www.adweek.com/media/tiktok-debuts-tiktok-creator-portal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AdWeeK: TikTok Debuts Creator Portal
          </a>
        </Container>

      <Container orientation="vertical" gap={20}>
        <SectionTitle title="TIKTOK SPORTS CAMPAIGN" />
        <VimeoEmbed
          title="TIKTOK EVERGREEN 30s - EDITOR"
          videoId="827456818"
          type="landscape"
        />
        <VimeoEmbed
          title="NFL CANADA - SOCIAL 30s - EDITOR"
          videoId="827456838"
          type="landscape"
          credits={[
            'Editors: Conor Kort, Patrick Ward',
            'Art Direction / Design: Josh Covarrubias, Francis Mekhail',
            'Animation: Johnny Chiu',
            '3D: Ian Alexander',
            'Copy: Eric Simpson, Maddie Schafer',
            'Producer: Lee Sacks'
          ]}
        />       
      </Container>

      <Container orientation="vertical" gap={20}>
        <SectionTitle title="TIKTOKS" />

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="@TikTokTips - Feature Tutorials" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827781356" type="portrait" />
            <VimeoEmbed videoId="827778640" type="portrait" />
            <VimeoEmbed videoId="828517210" type="portrait" />
            <VimeoEmbed videoId="828517234" type="portrait" />
          </Container>
        </Container>

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="@TikTok - Culture" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827780935" type="portrait" />
            <VimeoEmbed videoId="827812697" type="portrait" />
            <VimeoEmbed videoId="827781220" type="portrait" />
          </Container>
        </Container>

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="TikTok - Social Ads" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827787427" type="portrait" />
            <VimeoEmbed videoId="827787395" type="portrait" />
            <VimeoEmbed videoId="827811965" type="portrait" />
            <VimeoEmbed videoId="827788556" type="portrait" /> 
          </Container>
        </Container>
        
          <Container orientation="vertical" gap={20}>
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827780095" type="portrait" />
            <VimeoEmbed videoId="827780064" type="portrait" />
            <VimeoEmbed videoId="828064365" type="portrait" />
            <VimeoEmbed videoId="828402027" type="portrait" />
          </Container>
        </Container>
        
        <Container orientation="vertical" gap={20}>
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="828413656" type="landscape" />
            <VimeoEmbed videoId="827781067" type="landscape" />
            <VimeoEmbed videoId="828517688" type="landscape" />
            
          </Container>
        </Container>
     
          <Container orientation="vertical" gap={20}>
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="828517247" type="portrait" />
            <VimeoEmbed videoId="828517152" type="portrait" />
            <VimeoEmbed videoId="828517066" type="portrait" />
            <VimeoEmbed videoId="828517277" type="portrait" />
          </Container>
        </Container>
        
      </Container>
    </Container>
  );
}
