// TC_017_1_CS: Unlock connector - no charging session running (Not fixed cable)
export const TC_017_1_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  },
  {
    step: 3,
    ev: "Send UnlockConnector.req",
    evse: "Send UnlockConnector.conf",
    description: "Send UnlockConnector.req with connectorId > 0. Verify that UnlockConnector.conf is received with status 'Unlocked'."
  }
];

