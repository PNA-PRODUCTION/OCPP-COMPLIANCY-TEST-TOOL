// TC_011_2_CS: Remote Start Charging Session - Time Out
export const TC_011_2_CS_SEQUENCE = [
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
    ev: "Send ChangeConfiguration.req (ConnectionTimeOut = 45)",
    evse: "Send ChangeConfiguration.conf",
    description: "If ConnectionTimeOut is not 45, send ChangeConfiguration.req to set it to 45. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If ConnectionTimeOut is already 45, skip this step."
  },
  {
    step: 4,
    ev: "Send GetConfiguration.req (key = AuthorizeRemoteTxRequests)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'AuthorizeRemoteTxRequests'. Verify that GetConfiguration.conf is received and contains AuthorizeRemoteTxRequests value."
  },
  {
    step: 5,
    ev: "Send ChangeConfiguration.req (AuthorizeRemoteTxRequests = true)",
    evse: "Send ChangeConfiguration.conf",
    description: "If AuthorizeRemoteTxRequests is not true, send ChangeConfiguration.req to set it to true. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If AuthorizeRemoteTxRequests is already true, skip this step."
  },
  {
    step: 6,
    ev: "Send RemoteStartTransaction.req",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with a valid IdTag. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 7,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req",
    description: "Verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'."
  },
  {
    step: 8,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'. Record the timestamp."
  },
  {
    step: 9,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Available'. Verify that the time between Preparing and Available matches ConnectionTimeOut value. Allow a range of (ConnectionTimeOut) to (ConnectionTimeOut + 10) seconds."
  }
];

