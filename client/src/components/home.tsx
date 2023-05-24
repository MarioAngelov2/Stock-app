import * as React from 'react';

interface Props {
  price: number
}

export function Home ({price}: Props) {
  return (
    <div>
      <h1>{price}</h1>
    </div>
  );
}
