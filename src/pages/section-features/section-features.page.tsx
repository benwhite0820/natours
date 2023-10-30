import './seciton-features.style.scss';
import Grid from '@components/grid/grid.component';
import FeatureBox from '@components/feature-box/feature-box.component';
import { sectionFeaturesData } from '@data/section-features-data';

const SectionFeatures = () => {
  return (
    <section className="section-features">
      <Grid row>
        {sectionFeaturesData.map(({ title, paragraph, icon }) => (
          <Grid colClassName="col-1-of-4" key={title}>
            <FeatureBox title={title} paragraph={paragraph} icon={icon} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SectionFeatures;
