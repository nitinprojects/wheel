import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ isOpen, onClose, deleteContactName }) => {
  const handleDelete = async () => {
    try {
      Toastr.success("Contact has been successfully deleted.");
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };

  const renderAlertMessage = name => (
    <span>
      Are you sure you want to delete the contact "<strong>{name}</strong>"?
      This action cannot be undone.
    </span>
  );

  return (
    <Alert
      isOpen={isOpen}
      message={renderAlertMessage(deleteContactName)}
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
