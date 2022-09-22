import React, { useState } from "react";

import { Formik, Form as NeetoUIForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLES } from "../constants";

const Form = ({ contact, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Contact has been successfully added.");
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <NeetoUIForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="grid w-full grid-cols-2 gap-4">
              <Input
                required
                className="w-full flex-grow-0"
                label="First Name"
                name="firstName"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastName"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              type="email"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
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
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </NeetoUIForm>
      )}
    </Formik>
  );
};

export default Form;
