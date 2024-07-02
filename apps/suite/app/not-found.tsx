import { BackButton } from '../components/BackButton';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="heading--1">404</h1>{' '}
      <h4 className="subtitle--1">
        Mmmm... well, sometime this things happens
      </h4>
      <BackButton />
    </div>
  );
}
