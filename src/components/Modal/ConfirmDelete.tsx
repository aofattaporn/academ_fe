import { Modal, Button } from "@mui/material";

type ConfirmDeleteProps = {
  handleClick: () => void;
  handleClose: () => void;
};
const ConfirmDelete = ({ handleClick, handleClose }: ConfirmDeleteProps) => {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center"
    >
      <div className="bg-white rounded-md py-8 px-8 h-fit my-12 w-full sm:w-1/2 md:w-1/4">
        <h2 className=" text-xl my-2 font-bold">Confirm Deletion</h2>
        <p>
          You're about to permanently delete this issue, its comments and
          attachments, and all of its data.
        </p>
        <p className="mt-4">
          If you're not sure, you can resolve or close this issue instead.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <div className="flex gap-4">
            <Button variant="contained" onClick={handleClick} color="error">
              Delete
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDelete;
