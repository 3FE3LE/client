import { Link } from '@opt/navigations';

export default function Dashboard() {
  return (
    <div>
      <header>
        <h2>Your trips</h2>
        <button>new plan</button>
      </header>
      <article>
        <h3>Current trip</h3>
        <p>You can see your past trips here.</p>
        <p>
          To create a new trip, click on <strong>New Trip</strong>.
        </p>
        <p>Click on a trip to view its details.</p>
      </article>
      <article>
        <h3>Coming soon...</h3>
        <p>You can see your past trips here.</p>
        <p>
          To create a new trip, click on <strong>New Trip</strong>.
        </p>
        <p>Click on a trip to view its details.</p>
      </article>
      <article>
        <h3>Trips history</h3>
        <p>You can see your past trips here.</p>
        <p>
          To create a new trip, click on <strong>New Trip</strong>.
        </p>
        <p>Click on a trip to view its details.</p>
      </article>
      <Link href={'/trips'}>See all trips</Link>
    </div>
  );
}
