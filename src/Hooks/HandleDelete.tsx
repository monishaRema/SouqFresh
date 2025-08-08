import Swal from "sweetalert2";
import { useCallback } from "react";

type Callback<T = any> = (id: T) => void;

function useConfirmDelete<T = any>() {
  const confirmDelete = useCallback(
    (itemName: string, id: T, cb: Callback<T>) => {
      Swal.fire({
        title: `Delete ${itemName}?`,
        text: "This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "#146131",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          cb(id);
        }
      });
    },
    []
  );

  return confirmDelete;
}

export default useConfirmDelete;
