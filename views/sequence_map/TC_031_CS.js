// TC_031_CS: Unlock Connector - Unknown Connector
export const TC_031_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send UnlockConnector.req (connectorId = 9765)",
    evse: "Send UnlockConnector.conf (status = NotSupported)",
    description: "Send UnlockConnector.req with connectorId = 9765 (unknown connector). Verify that UnlockConnector.conf is received with status 'NotSupported'."
  }
];

