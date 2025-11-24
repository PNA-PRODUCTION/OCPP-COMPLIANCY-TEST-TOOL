// TC_002_CS: Cold Boot Charge Point-Pending
export const TC_002_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send BootNotification.conf",
    evse: "Send BootNotification.req",
    description: "Verify that BootNotification.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send GetConfiguration.req (empty key list)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with empty key list. Verify that GetConfiguration.conf is received and contains valid configuration keys."
  },
  {
    step: 3,
    ev: "Send ChangeConfiguration.req (MeterValueSampleInterval = 15)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to change 'MeterValueSampleInterval' to '15'. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send BootNotification.conf",
    evse: "Send BootNotification.req (Second)",
    description: "Verify that BootNotification.req is received again after configuration change."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (connectorId = 0 and connectorId = 1, status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId = 0. Verify that StatusNotification.req is received with connectorId = 1. Verify that status is 'Available'."
  },
  {
    step: 6,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received. Record the timestamp. Verify that the interval between two Heartbeat.req messages matches the configured HeartbeatInterval. Allow a 1-second deviation."
  }
];

