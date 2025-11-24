// TC_055_CS: Trigger Message - Rejected
export const TC_055_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send TriggerMessage.req (requestedMessage = MeterValues, connectorId = 4352)",
    evse: "Send TriggerMessage.conf (status = Rejected)",
    description: "Send TriggerMessage.req with requestedMessage='MeterValues' and connectorId=4352 (invalid connector). Verify that TriggerMessage.conf is received with status 'Rejected' within 5 seconds."
  }
];

