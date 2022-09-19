import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  ASSIGNED_CONTACTS,
  TAGS,
} from "../constants";

const NoteForm = ({ note, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Note has been successfully Added.");
    onClose();
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={2}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assigned_contact"
              options={ASSIGNED_CONTACTS}
              placeholder="Select Contact"
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAGS}
              placeholder="Select Tag"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
