// TC_003_CS: Regular Charging Session - Plugin First
export const TC_003_CS_SEQUENCE = [
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
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req",
    description: "Verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as Authorize.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  }
];

