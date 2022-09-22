import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewNoteForm = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form note={NOTES_FORM_INITIAL_FORM_VALUES} onClose={onClose} />
    </Pane>
  );
};

export default NewNoteForm;
