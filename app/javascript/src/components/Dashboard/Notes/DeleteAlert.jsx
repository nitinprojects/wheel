import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ isOpen, onClose, deleteNoteTitle }) => {
  const handleDelete = async () => {
    try {
      Toastr.success("Note has been successfully deleted.");
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };

  const renderAlertMessage = title => (
    <span>
      Are you sure you want to delete the note <strong>{title}</strong> This
      action cannot be undone.
    </span>
  );

  return (
    <Alert
      isOpen={isOpen}
      message={renderAlertMessage(deleteNoteTitle)}
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
