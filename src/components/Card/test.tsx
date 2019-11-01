import React from 'react';

import Card from './index';

const customData1 = {
  image: 'http://macari.com.uy/sitio/prod/wp-content/uploads/2017/02/pocitos.jpg',
  title: 'Pocitos',
  details:
    'El barrio Pocitos, o de los Pocitos como se lo conocía anteriormente, reúne varias de las características que tanto montevideanos como extranjeros buscan a la hora de adquirir su vivienda.pocitosLa cercanía con la Rambla de Montevideo, única en todos los sentidos, hace dePocitos un barrio privilegiado y dirigido a familias de clase media-alta. La vista nocturna que ofrece es inigualable y la preferida de montevideanos y turistas en cualquier época del año',
  onClick: () => {},
};
const customData2 = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Casino_Carrasco_by_MaxiCiccone.JPG/368px-Casino_Carrasco_by_MaxiCiccone.JPG',
  title: 'Carrasco',
  details:
    'Carrasco es un barrio ubicado a 15 km del centro de la ciudad uruguaya de Montevideo al sudeste de la misma, sobre el Río de la Plata y el arroyo Carrasco. Sus ejes principales son: la rambla costanera y las avenidas Italia, Bolivia, y Rivera.',
  onClick: () => {},
};
const customData3 = {
  image:
    'http://montevideo.gub.uy/sites/default/files/styles/galeriaslideshowcontenido/public/biblioteca/DSC_6858.jpg?itok=a1X3iXYx',
  title: 'Prado',
  details:
    'El Prado es el primer parque público de la ciudad. Se conformó como un proceso de agregación en el tiempo de calificadas estructuras verdes urbanas, que se localizan alrededor del arroyo Miguelete, que es su principal conector y vertebrador.',
  onClick: () => {},
};
const customData4 = {
  image:
    'https://elitebeautysociety.com/wp-content/uploads/2017/12/Precision-Haircutting_Feature.jpg',
  title: 'Haircut',
  details:
    'Precision haircutting means the exact shape and technique used. This can mean a perfect fringe or an A-Line bob with almost no imperfections. In hairdressing we know our job can only be as good as the tools we use. Sometimes it can be difficult to determine which tools are the most effective in order to achieve the ideal end result.',
  onClick: () => {},
  service: {
    duration: '1',
    price: '450',
  },
};
const customData5 = {
  image: 'https://www.saloniris.com/wp-content/uploads/2019/03/hairdresser-feature.jpg',
  title: 'Nicky Liam',
  details: 'Hairdresser',
  loading: true,
  onClick: () => {},
};

const Test = () => (
  <>
    <Card {...customData1} />
    <Card {...customData2} />
    <Card {...customData3} />
    <Card {...customData4} />
    <Card {...customData5} />
  </>
);

export default Test;
