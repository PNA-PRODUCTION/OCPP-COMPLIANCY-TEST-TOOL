// TC_040_1_CS: Configuration key - NotSupported
export const TC_040_1_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send ChangeConfiguration.req (key = Testing)",
    evse: "Send ChangeConfiguration.conf (status = NotSupported)",
    description: "Send ChangeConfiguration.req with key 'Testing' (unsupported key). Verify that ChangeConfiguration.conf is received with status 'NotSupported'."
  }
];

