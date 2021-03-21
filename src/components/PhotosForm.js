import { Fragment, useRef } from 'react';

export const PhotosForm = () => {
  const modalBtn = useRef(null);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#testmodal"
        ref={modalBtn}
      >
        Small modal
      </button>

      <div
        id="testmodal"
        className="modal fade bd-example-modal-sm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">...</div>
        </div>
      </div>
    </Fragment>
  );
};
