import { useState } from 'react';

export const PhotosForm = () => {
  const [preview, setPreview] = useState('');
  let [urls, setUrls] = useState([]);

  const handleChange = (e) => {
    let files = e.target.files; // accessing file
    // let url = URL.createObjectURL(file);

    setUrls([
      ...urls,
      ...[...files].map((file) => {
        return URL.createObjectURL(file);
      }),
    ]);
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = ({ target: { result } }) => {
    //     setPreview(result);
    //   };

    //   reader.readAsDataURL(file); // you can read image file as DataURL like this.
    // }
  };

  return (
    <form>
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
        {urls.map((url) => {
          return <img width="200" height="200" src={url} alt="" />;
        })}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
