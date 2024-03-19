import { Modal, Button, Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ErrorCustom } from "../../types/GenericType";

type ConfirmDeleteProps = {
  handleDelete: () => void;
  handleClose: () => void;
  isDeleting: boolean;
  error: ErrorCustom | null;
};
const ConfirmDelete = ({
  handleDelete,
  handleClose,
  isDeleting,
  error,
}: ConfirmDeleteProps) => {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center"
    >
      <div className="bg-white rounded-md py-8 px-8 h-fit my-12 w-full sm:w-1/2 md:w-2/6">
        {error ? (
          <Alert severity="error" className="my-4">
            {error.description.toLowerCase()}
          </Alert>
        ) : null}

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
            {isDeleting ? (
              <Button variant="contained" disabled color="error">
                <CircularProgress color="inherit" size={16} />
              </Button>
            ) : (
              <Button variant="contained" onClick={handleDelete} color="error">
                Delete
              </Button>
            )}

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
