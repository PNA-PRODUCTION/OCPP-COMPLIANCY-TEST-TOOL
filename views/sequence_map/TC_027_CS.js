// TC_027_CS: Remote start transaction - connector id shall not be 0
export const TC_027_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send RemoteStartTransaction.req (connectorId = 0)",
    evse: "Send CALLERROR",
    description: "Send RemoteStartTransaction.req with connectorId = 0. Verify that CALLERROR is received (connector id shall not be 0)."
  }
];

