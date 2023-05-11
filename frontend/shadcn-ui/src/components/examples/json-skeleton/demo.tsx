import React from 'react';
import cn from 'classnames';
import { Box, Skeleton } from '../../ui';
import exampleJson from './example-json.json';

interface Component {
  type: string;
  name: string;
  layout: string;
  description: string;
  components?: Component[];
}

interface JsonSkeletonProps {
  json: Component;
}

const createComponent = (component: Component) => {
  const { name, layout, components = [] } = component;
  const className = cn(layout);

  if (components.length === 0) {
    return (
      <Skeleton id={name} className={className}>
        <span>{name}</span>
      </Skeleton>
    );
  } else {
    return (
      <Box id={name} className={className}>
        {components.map((childComponent, index) => (
          <React.Fragment key={index}>{createComponent(childComponent)}</React.Fragment>
        ))}
      </Box>
    );
  }
};

const JsonSkeleton: React.FC<JsonSkeletonProps> = ({ json }) => {
  const { layout, components = [] } = json;
  const className = cn(layout);

  return (
    <Box className={className}>
      {components.map((component, index) => (
        <React.Fragment key={index}>{createComponent(component)}</React.Fragment>
      ))}
    </Box>
  );
};

const JsonSkeletonDemo = () => {
  return <JsonSkeleton json={exampleJson} />;
};

export { JsonSkeleton, JsonSkeletonDemo };
