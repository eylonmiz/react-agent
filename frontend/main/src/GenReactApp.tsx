import { BrowserRouter } from 'react-router-dom';
import '@react-gpt/shadcn-ui/dist/output.css';
import '../dist/output.css';
import { JsonSkeleton } from '@react-gpt/shadcn-ui';

import jsonCompositionExample from './react-gpt/AnalyticsDashboardExample/composition.json';
import AnalyticsDashboardPageExampleDemo from './react-gpt/AnalyticsDashboardExample/demo';

import landingPageJsonComposition from './react-gpt/SaaSLandingPageExample/composition.json';
import SaasCrmLandingPageDemo from './react-gpt/SaaSLandingPageExample/demo';

import jsonComposition from './react-gpt/AnalyticsDashboard/composition.json';
import AnalyticsDashboardPageDemo from './react-gpt/AnalyticsDashboard/demo';

// Example of generated React component from the JSON composition
const DashboardExample = () => {
  return <AnalyticsDashboardPageExampleDemo />; // Example demo
  // return <JsonSkeleton json={jsonCompositionExample} />; // Example JSON skeleton
};

// Example of generated React component from the JSON composition
const SaasCrmLandingPageExample = () => {
  return <SaasCrmLandingPageDemo />; // Example demo
  // return <JsonSkeleton json={landingPageJsonComposition} />; // Example JSON skeleton
};
// Uncomment after implementing the AnalyticsDashboard component (yarn backend:dev (read README.md))
// You might need to do some debugging as the generated code is not perfect nor production ready yet
const AnalyticsDashboard = () => {
  return <AnalyticsDashboardPageDemo />;
  // return <JsonSkeleton json={jsonComposition} />;
};

function App() {
  return (
    <BrowserRouter>
      {/* <DashboardExample /> */}
      <AnalyticsDashboard />
      {/* <SaasCrmLandingPageExample /> */}
    </BrowserRouter>
  );
}

export default App;
