// TC_018_1_CS: Unlock Connector - With Charging Session (Not fixed cable)
export const TC_018_1_CS_SEQUENCE = [
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
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'. Cable connected automatically before RemoteStartTransaction."
  },
  {
    step: 3,
    ev: "Send RemoteStartTransaction.req",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with a valid IdTag. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as RemoteStartTransaction.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  },
  {
    step: 6,
    ev: "Send UnlockConnector.req",
    evse: "Send UnlockConnector.conf",
    description: "Send UnlockConnector.req with connectorId > 0. Verify that UnlockConnector.conf is received with status 'Unlocked'."
  },
  {
    step: 7,
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (reason = UnlockCommand)",
    description: "Verify that StopTransaction.req is received with reason 'UnlockCommand'. Verify that StopTransaction.req contains the same IdTag as StartTransaction.req. Verify that StopTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 8,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Finishing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Finishing'."
  },
  {
    step: 9,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Available'."
  }
];

