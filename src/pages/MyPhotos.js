import { Fragment } from 'react';
import MyPosts from './../components/MyPosts';
import PhotosForm from './../components/PhotosForm';

export const MyPhotos = () => {
  return (
    <Fragment>
      <MyPosts />
      <PhotosForm />
    </Fragment>
  );
};
