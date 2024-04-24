import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { Backdrop, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeModal } from "../stores/modalSlice/modalSlice";

type GenericModalProps = {
  children: ReactNode;
};

const GenericModal = ({ children }: GenericModalProps) => {
  const title = useSelector((state: RootState) => state.modal.title);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const content = useSelector((state: RootState) => state.modal.children);

  const dispatch = useDispatch();

  return (
    <>
      {children}
      {isOpen && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isOpen}
        >
          <div className="w-full md:w-5/12 bg-white rounded-md p-8 text-dark font-roboto grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{title}</h2>
              <IconButton onClick={() => dispatch(closeModal())}>
                <CloseIcon />
              </IconButton>
            </div>
            {content}
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default GenericModal;
