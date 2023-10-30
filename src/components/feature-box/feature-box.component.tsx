import './feature-box.style.scss';
import '@assets/scss/abstracts/_variables.scss';
import Heading from '@components/heading/heading.component';

type Props = {
  title: string;
  paragraph: string;
  icon: JSX.Element;
};

const FeatureBox = ({ title, paragraph, icon }: Props) => {
  return (
    <div className="feature-box">
      <span className="feature-box__icon">{icon && icon}</span>
      <Heading textLevel="ter" className="u-margin-bottom-small">
        {title}
      </Heading>
      <p className="feature-box__text">{paragraph}</p>
    </div>
  );
};

export default FeatureBox;
