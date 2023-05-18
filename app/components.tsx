import { DefaultFont } from 'app/fonts';
import NextImage, { ImageProps } from 'next/image';

export const Container = (props: {
  orientation: 'vertical' | 'horizontal';
  gap: number;
  children: React.ReactNode;
}) => (
  <div
    className={`${DefaultFont.className}`}
    style={{
      display: 'flex',
      flexDirection: props.orientation === 'vertical' ? 'column' : 'row',
      gap: `${props.gap}px`,
      justifyContent: 'stretch',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    }}
  >
    {props.children}
  </div>
);

export const Embed = (
  props: React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >
) => (
  <iframe
    {...props}
    style={{
      display: 'block',
      outline: 'none',
      border: 'none',
      width: '100%',
      height: 'auto',
      ...props.style
    }}
    allowFullScreen
    allow="autoplay; fullscreen; picture-in-picture"
  />
);

export const VimeoEmbed = (props: {
  title?: string;
  videoId: string;
  type: 'portrait' | 'landscape';
  credits?: string[];
}) => (
  <div>
    {props.title && (
      <h3
        style={{
          margin: 0,
          fontSize: '1.25rem',
          fontWeight: 'bold'
        }}
      >
        {props.title}
      </h3>
    )}
    <iframe
      src={`https://player.vimeo.com/video/${props.videoId}?h=202765551e&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
      style={{
        display: 'block',
        outline: 'none',
        border: 'none',
        width: '100%',
        height: 'auto',
        aspectRatio: props.type === 'portrait' ? '9 / 16' : '16 / 9'
      }}
      allowFullScreen
      allow="autoplay; fullscreen; picture-in-picture"
    />
    {props.credits && (
      <div
        style={{ marginTop: '10px', alignSelf: 'flex-end', textAlign: 'right' }}
      >
        {props.credits.map((credit, index) => (
          <div key={index}>{credit}</div>
        ))}
      </div>
    )}
  </div>
);

export const Image = (props: ImageProps) => (
  <NextImage
    {...props}
    style={{
      display: 'block',
      width: '100%',
      height: 'auto',
      ...props.style
    }}
  />
);

export const SectionTitle = (props: { title: string }) => (
  <h2
    style={{
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: 0
    }}
  >
    {props.title}
  </h2>
);
