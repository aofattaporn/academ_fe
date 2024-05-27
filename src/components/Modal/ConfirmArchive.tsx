import { Modal, Button, CircularProgress } from "@mui/material";

type ConfirmArchiveProps = {
  handleArchive: () => void;
  handleClose: () => void;
  isArchiving: boolean;
};
const ConfirmArchive = ({
  handleArchive,
  handleClose,
  isArchiving,
}: ConfirmArchiveProps) => {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center"
    >
      <div className="bg-white rounded-md py-8 px-8 h-fit my-12 w-full sm:w-1/2 md:w-2/6">
        <h2 className=" text-xl my-2 font-bold">Confirm complete project</h2>
        <p>Are you sure you want to archive this project?</p>
        <p className="mt-4">
          Your form will not accept submissions while it is completed.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <div className="flex gap-4">
            {isArchiving ? (
              <Button variant="contained" disabled color="error">
                <CircularProgress color="inherit" size={16} />
              </Button>
            ) : (
              <Button
                variant="contained"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleArchive();
                }}
              >
                Complete
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

export default ConfirmArchive;
