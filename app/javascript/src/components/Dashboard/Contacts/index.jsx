import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import ContactsMenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deleteContactName, setDeleteContactName] = useState("");

  return (
    <>
      <ContactsMenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" onClick={() => {}} />
          }
          menuBarToggle={() => {
            setShowMenu(showMenu => !showMenu);
          }}
          searchProps={{
            onChange: () => {},
            value: "",
          }}
        />
        <Scrollable className="w-full">
          <Table
            setDeleteContactName={setDeleteContactName}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        </Scrollable>
      </Container>
      <DeleteAlert
        deleteContactName={deleteContactName}
        isOpen={showDeleteAlert}
        onClose={() => setShowDeleteAlert(false)}
      />
    </>
  );
};

export default Contacts;
