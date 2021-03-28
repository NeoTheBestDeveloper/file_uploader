import { Fragment } from 'react';
import { AllPosts } from '../components/AllPosts';
import XX from './../img/XX.jpg';
import XIX from './../img/XIX.jpg';
import MiddleAges from './../img/MiddleAges.jpg';
import Antique from './../img/Antique.jpg';

export const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Card 1',
      comment: 'Comment 1',
      author: 'Sandy',
      category: 'XX century',
      img: XX,
    },
    {
      id: 2,
      title: 'Card 2',
      comment: 'Comment 2',
      author: 'Dan',
      category: 'Middle Age',
      img: MiddleAges,
    },
    {
      id: 3,
      title: 'Card 3',
      comment: 'Comment 3',
      author: 'Mike',
      category: 'XIX century',
      img: XIX,
    },
    {
      id: 4,
      title: 'Card 4',
      comment: 'Comment 4',
      author: 'John',
      category: 'Antiquity',
      img: Antique,
    },
  ];

  return (
    <Fragment>
      <h1>Popular</h1>
      <AllPosts posts={posts} />
    </Fragment>
  );
};
