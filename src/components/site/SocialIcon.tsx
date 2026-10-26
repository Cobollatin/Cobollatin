import type { ComponentProps, ComponentType } from 'react';

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRedditAlien,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

type SocialIconName = 'Facebook' | 'GitHub' | 'Instagram' | 'LinkedIn' | 'Reddit' | 'Twitter' | 'YouTube';

type Props = {
  label: SocialIconName | (string & {});
  size?: number;
} & Omit<ComponentProps<'svg'>, 'children'>;

const iconsByLabel: Record<SocialIconName, ComponentType<ComponentProps<'svg'>>> = {
  Facebook: FaFacebook,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  Reddit: FaRedditAlien,
  Twitter: FaXTwitter,
  YouTube: FaYoutube,
};

export default function SocialIcon({ label, size = 20, ...properties }: Props) {
  const Icon = iconsByLabel[label as SocialIconName];
  if (!Icon) return null;

  return <Icon aria-hidden="true" focusable="false" height={size} width={size} {...properties} />;
}
