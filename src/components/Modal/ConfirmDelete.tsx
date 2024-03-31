import { Modal, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type ConfirmDeleteProps = {
  handleDelete: () => void;
  handleClose: () => void;
  isDeleting: boolean;
};
const ConfirmDelete = ({
  handleDelete,
  handleClose,
  isDeleting,
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
              <Button
                variant="contained"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                color="error"
              >
                Delete
              </Button>
            )}

            <Button
              onMouseDown={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              color="primary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDelete;
