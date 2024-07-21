import { deleteJobActions } from "@/utils/actions";
import JobInfo from "./JobInfo";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useToast } from "../ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type DeleteJobType = {
  id: string;
};

const DeleteJobBtn = ({ id }: DeleteJobType) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobActions(id),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "There was an error! ☝🏼" });
        return;
      }

      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
    },
  });

  return (
    <Button
      size="sm"
      disabled={isPending}
      onClick={() => {
        mutate(id);
      }}
    >
      {isPending ? "deleting..." : "delete"}
    </Button>
  );
};

export default DeleteJobBtn;
