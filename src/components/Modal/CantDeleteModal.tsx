import { Button, Modal } from "@mui/material";

type CantDeleteModalProps = {
  handleClose: () => void;
};

const CantDeleteModal = ({ handleClose }: CantDeleteModalProps) => {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
      className="flex justify-center"
    >
      <div className="bg-white rounded-md py-8 px-8 h-fit my-12 w-full sm:w-1/2 md:w-2/6">
        <h2 className="text-xl my-2 font-bold">Cannot Delete this process</h2>
        <p>There are tasks associated with this process.</p>
        <p className="mt-4 text-error">
          Please move these tasks to another process before attempting to delete
          this one.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        ></div>
        <div className="flex justify-end">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            color="primary"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CantDeleteModal;
