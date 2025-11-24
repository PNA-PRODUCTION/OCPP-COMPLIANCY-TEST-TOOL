// TC_028_CS: Remote Stop Transaction - Rejected
export const TC_028_CS_SEQUENCE = [
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
    ev: "Send RemoteStopTransaction.req (unknown transactionID)",
    evse: "Send RemoteStopTransaction.conf (status = Rejected)",
    description: "Send RemoteStopTransaction.req with unknown transactionID (using 487249487). Verify that RemoteStopTransaction.conf is received with status 'Rejected'. Note: StopTransaction.req should NOT occur during the test."
  }
];

