import dayjs from "utils/dayjs";

export const calculateCreatedAgo = date => dayjs(date).fromNow();
