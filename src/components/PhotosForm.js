import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { uploadMyImages } from '../redux/actions';

const PhotosForm = ({ uploadMyImages }) => {
  let [previews, setPreviews] = useState([]);
  let [files, setFiles] = useState([]);

  const handleChange = (e) => {
    let currentFiles = [...e.target.files]; // accessing file

    setFiles([...files, ...currentFiles]);

    setPreviews([
      ...previews,
      ...currentFiles.map((file) => {
        return URL.createObjectURL(file);
      }),
    ]);
  };

  const submithandle = (e) => {
    e.preventDefault();
    uploadMyImages(files);
    setPreviews([]);
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
        <label htmlFor="exampleFormControlFile1">Example file input</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
          onChange={handleChange}
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

export default connect(null, { uploadMyImages })(PhotosForm);
