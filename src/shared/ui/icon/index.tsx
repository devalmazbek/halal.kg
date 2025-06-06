import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default Icon;
