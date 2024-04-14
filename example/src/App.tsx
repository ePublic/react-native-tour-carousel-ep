import * as React from 'react';

import TourCarousel from 'react-native-tour-carousel';

export default function App() {
  const data = [
    {
      illustration: '',
      subtitle: '',
      title: '',
    },
  ];

  return <TourCarousel data={data} />;
}
