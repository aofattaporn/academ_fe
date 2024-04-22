import { useQuery } from "react-query";
import { Navigate, useSearchParams } from "react-router-dom";
import { QUERY_KEY } from "../../types/GenericType";
import projectApi from "../../libs/projectApi";
import { Button, CircularProgress } from "@mui/material";

const InvitePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const {
    isLoading: inviteLoading,
    isSuccess: inviteSuccess,
    isError: inviteIsError,
  } = useQuery(QUERY_KEY.ACCEPT_INVITE, () => projectApi.getAllProject(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (!token) return <Navigate to="/notfound" />;

  if (inviteLoading) return <CircularProgress />;

  if (inviteIsError)
    return (
      <div className=" bg-white shadow-3xl w-2/4 p-8 text-center">
        <p>
          <span className=" text-green-700 font-bold">Somthing failed</span> to
          Please to joint within project again
        </p>
      </div>
    );

  if (inviteSuccess)
    return (
      <div className=" bg-white shadow-3xl w-2/4 p-8 text-center">
        <p>
          <span className=" text-green-700 font-bold">Accept the invite </span>{" "}
          to become a collaborator on the project Website ideas success
          <div className="my-8">
            <Button>Navigat to your project</Button>
          </div>
        </p>
      </div>
    );
};

export default InvitePage;
