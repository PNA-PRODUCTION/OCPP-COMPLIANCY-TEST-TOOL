// TC_030_CS: Unlock Connector - Unlock Failure
export const TC_030_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send UnlockConnector.req",
    evse: "Send UnlockConnector.conf (status = UnlockFailed)",
    description: "Send UnlockConnector.req with connectorId > 0. Verify that UnlockConnector.conf is received with status 'UnlockFailed'."
  }
];

