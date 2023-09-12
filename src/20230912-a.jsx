function Example() {

  const myModal = React.useRef(null);


  React.useEffect(() => {
    myModal.current = new bootstrap.Modal(myModal.current);
  }, [])


  const openModal = () => {

    myModal.current.show();
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        開啟 Modal
      </button>

      <div className="modal fade" ref={myModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />);