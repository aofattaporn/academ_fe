import { useQuery } from "react-query";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { QUERY_KEY } from "../../types/GenericType";
import projectApi from "../../libs/projectApi";
import { Backdrop, Button, CircularProgress } from "@mui/material";

const InvitePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const {
    isLoading: inviteLoading,
    isSuccess: inviteSuccess,
    isError: inviteIsError,
  } = useQuery(
    QUERY_KEY.ACCEPT_INVITE,
    () => projectApi.acceptInvite(token as string),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      onSuccess: () => {},
    }
  );

  if (!token) return <Navigate to="/notfound" />;

  if (inviteLoading)
    return (
      <Backdrop open={true}>
        <CircularProgress />{" "}
      </Backdrop>
    );

  if (inviteIsError)
    return (
      <Backdrop open={true}>
        <div className="bg-white shadow-3xl w-1/4 p-8 text-center">
          <p>
            <span className=" text-red-700 font-bold">Somthing failed</span> to
            Please to joint within project again
          </p>
        </div>
      </Backdrop>
    );

  if (inviteSuccess)
    return (
      <Backdrop open={true}>
        <div className=" bg-white shadow-3xl w-2/4 p-8 text-center">
          <p>
            <span className=" text-green-700 font-bold">
              Accept the invite{" "}
            </span>{" "}
            to become a collaborator on the project Website ideas success
            <div className="my-8">
              <Link to={`/projects`}>
                <Button>Navigat to your project</Button>
              </Link>
            </div>
          </p>
        </div>
      </Backdrop>
    );
};

export default InvitePage;
