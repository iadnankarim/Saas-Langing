import { favicon, logo } from '@/assets';

type LogoProps = {
  variant?: 'default' | 'icon';
  className?: string;
};

const Logo = ({ variant = 'default', className }: LogoProps) => {
  return (
    <a
      href=''
      className={className}
    >
      {variant === 'icon' && (
        <img
          src={favicon}
          alt='Analytix logo'
          width={32}
          height={32}
        />
      )}

      {variant === 'default' && (
        <img
          src={logo}
          alt='Analytix logo'
          width={150}
          height={31}
        />
      )}
    </a>
  );
};

export default Logo;
