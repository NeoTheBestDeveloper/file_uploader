import { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions';
import addFileIco from './../img/file-plus.svg';

const PhotosForm = ({ addPost }) => {
  let [previews, setPreviews] = useState([]);
  let [photos, setPhotos] = useState([]);

  const handleChange = (e) => {
    let currentPhotos = [...e.target.files]; // accessing file

    window.test = e.target.files;
    setPhotos([...photos, ...currentPhotos]);

    setPreviews([
      ...previews,
      ...currentPhotos.map((file) => {
        return URL.createObjectURL(file);
      }),
    ]);
  };

  const submithandle = (e) => {
    e.preventDefault();
    addPost({
      title: 'Test',
      author: 'Mike',
      category: 'IT',
      comment: 'comments sadfsa',
      files: {
        photos: photos,
      },
    });
    setPreviews([]);
    setPhotos([]);
  };

  return (
    <form onSubmit={submithandle}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Material name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter name..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Add text</label>
        <textarea
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter some text..."
        ></textarea>
      </div>
      <div className="form-group">
        <h4>
          <label htmlFor="exampleFormControlFile1" className="custom-file-input-label">
            <img src={addFileIco} alt="" width="30" height="30" />
          </label>
        </h4>

        <input
          type="file"
          className="form-control-file custom-file-input"
          id="exampleFormControlFile1"
          onChange={handleChange}
          value=""
          multiple
        />
      </div>
      <div>
        <h2>Photos</h2>
        {previews.map((url) => {
          return <img width="200" height="200" src={url} alt="" key={url} />;
        })}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default connect(null, { addPost })(PhotosForm);
