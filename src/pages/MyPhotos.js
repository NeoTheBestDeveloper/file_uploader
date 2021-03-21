import { Fragment } from 'react';
import { MyCards } from './../components/MyCards';
import { PhotosForm } from './../components/PhotosForm';

export const MyPhotos = () => {
  return (
    <Fragment>
      <MyCards />
      <PhotosForm />
    </Fragment>
  );
};
