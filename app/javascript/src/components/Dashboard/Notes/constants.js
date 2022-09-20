import * as yup from "yup";

export const NOTES_LIST_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description: `Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "created",
    createdAt: "2022-09-20T10:39:16+00:00",
    createdBy: "Oliver Smith",
    imageUrl: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description: `Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Onboarding",
    status: "drafted",
    createdAt: "2022-09-20T10:39:16+00:00",
    createdBy: "Oliver Smith",
    imageUrl: "https://i.pravatar.cc/300",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description: `Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "User Flow",
    status: "drafted",
    createdAt: "2022-09-20T10:39:16+00:00",
    createdBy: "Jon Paul",
    imageUrl: "",
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description: `Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "UX",
    status: "drafted",
    createdAt: "2022-09-20T10:39:16+00:00",
    createdBy: "Oliver Smith",
    imageUrl: "https://i.pravatar.cc/300",
  },
  {
    id: 5,
    title: "How to claim the warranty?",
    description: `Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Bug",
    status: "drafted",
    createdAt: "2022-09-20T10:39:16+00:00",
    createdBy: "Oliver Smith",
    imageUrl: "https://i.pravatar.cc/300",
  },
];

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const ASSIGNED_CONTACTS = [
  {
    label: "Value One",
    value: "value1",
  },
  {
    label: "Value Two",
    value: "value2",
  },
];

export const TAGS = [
  {
    label: "UI",
    value: "UI",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "Tech",
    value: "Tech",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .nullable()
    .shape({
      label: yup
        .string()
        .oneOf(ASSIGNED_CONTACTS.map(contact => contact.label)),
      value: yup
        .string()
        .oneOf(ASSIGNED_CONTACTS.map(contact => contact.value)),
    })
    .required("Assigned Contact is is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS.map(tag => tag.value)),
      })
    )
    .required("Tag is required")
    .min(1, "Min one tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
