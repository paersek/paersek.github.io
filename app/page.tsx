import {
  Container,
  Embed,
  Image,
  SectionTitle,
  VimeoEmbed
} from 'app/components';
import DavidImage from 'app/images/David_5-16v1.png';

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
      </Container>

      <Container orientation="vertical" gap={10}>
        <VimeoEmbed
          title="DIRECTING REEL"
          videoId="827763770"
          type="landscape"
        />
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
        <VimeoEmbed
          title="TIKTOK CREATIVE STUDIO MARKETING REEL - LEAD EDITOR"
          videoId="776837738"
          type="landscape"
        />

        <Container orientation="vertical" gap={0}>
          <div>PRESS:</div>
          <a
            href="https://www.adweek.com/media/tiktok-debuts-tiktok-creator-portal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ADWEEK: TIKTOK DEBUTS CREATOR PORTAL
          </a>
        </Container>
      </Container>

      <Container orientation="vertical" gap={20}>
        <SectionTitle title="TIKTOKS" />

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="NHL - PITTSBURGH PENGUINS - HOCKEY SZN" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827787427" type="portrait" />
            <VimeoEmbed videoId="827787395" type="portrait" />
          </Container>
        </Container>

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="FEATURE TUTORIALS" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827781356" type="portrait" />
            <VimeoEmbed videoId="827778640" type="portrait" />
          </Container>
        </Container>

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="CULTURE" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827780935" type="portrait" />
            <VimeoEmbed videoId="827812697" type="portrait" />
            <VimeoEmbed videoId="827806816" type="portrait" />
          </Container>
        </Container>

        <Container orientation="vertical" gap={20}>
          <SectionTitle title="SOCIAL ADS" />
          <Container orientation="horizontal" gap={20}>
            <VimeoEmbed videoId="827811965" type="portrait" />
            <VimeoEmbed videoId="827788556" type="portrait" />
            <VimeoEmbed videoId="827780095" type="portrait" />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
