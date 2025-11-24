// TC_004_2_CS: Regular Charging Session – Identification First - ConnectionTimeOut
export const TC_004_2_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send GetConfiguration.req (key = ConnectionTimeOut)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'ConnectionTimeOut'. Verify that GetConfiguration.conf is received and contains ConnectionTimeOut value."
  },
  {
    step: 3,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req",
    description: "Verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'. Record the timestamp."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Available'. Verify that the time between Preparing and Available matches ConnectionTimeOut value. Allow a range of (ConnectionTimeOut - 1) to (ConnectionTimeOut + 10) seconds."
  }
];

