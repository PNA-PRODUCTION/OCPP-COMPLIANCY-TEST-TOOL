// TC_001_CS: Cold Boot Charge Point
export const TC_001_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send BootNotification.conf",
    evse: "Send BootNotification.req",
    description: "Verify that BootNotification.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (connectorId = 0 and connectorId = 1, status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId = 0. Verify that StatusNotification.req is received with connectorId = 1. Verify that status is 'Available'."
  },
  {
    step: 3,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received. Record the timestamp. Verify that the interval between two Heartbeat.req messages matches the configured HeartbeatInterval. Allow a 1-second deviation."
  }
];

