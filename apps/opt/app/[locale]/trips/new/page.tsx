import {
  TripCreationStep,
  TripPriorityStep,
  TripTypeStep,
} from '@opt/components/trips';
import { StepperFlow } from '@opt/components/UI';

const TripCreationSteps = [
  <TripCreationStep key="title" />,
  <TripPriorityStep key="priority" />,
  <TripTypeStep key="type" />,
];

export default function NewTrip() {
  return <StepperFlow steps={TripCreationSteps} />;
}
