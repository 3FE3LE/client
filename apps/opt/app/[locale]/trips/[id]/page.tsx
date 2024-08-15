import React from 'react';

export default function TripDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>TripDetail : {id}</div>;
}
