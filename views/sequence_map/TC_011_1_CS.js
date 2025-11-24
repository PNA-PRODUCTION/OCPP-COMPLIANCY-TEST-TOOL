// TC_011_1_CS: Remote Start Charging Session - Remote Start First
export const TC_011_1_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send GetConfiguration.req (key = AuthorizeRemoteTxRequests)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'AuthorizeRemoteTxRequests'. Verify that GetConfiguration.conf is received and contains AuthorizeRemoteTxRequests value."
  },
  {
    step: 3,
    ev: "Send ChangeConfiguration.req (AuthorizeRemoteTxRequests = true)",
    evse: "Send ChangeConfiguration.conf",
    description: "If AuthorizeRemoteTxRequests is not true, send ChangeConfiguration.req to set it to true. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If AuthorizeRemoteTxRequests is already true, skip this step."
  },
  {
    step: 4,
    ev: "Send RemoteStartTransaction.req",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with a valid IdTag. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req",
    description: "Verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'."
  },
  {
    step: 6,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  },
  {
    step: 7,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as RemoteStartTransaction.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 8,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  }
];

