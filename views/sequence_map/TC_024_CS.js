// TC_024_CS: Connector Lock Failure
export const TC_024_CS_SEQUENCE = [
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
    ev: "Send RemoteStartTransaction.req",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with a valid IdTag. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req",
    description: "If AuthorizeRemoteTxRequests is true, verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'. If AuthorizeRemoteTxRequests is false, skip this step."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  },
  {
    step: 6,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Faulted, errorCode = ConnectorLockFailure)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Faulted'. Verify that errorCode is 'ConnectorLockFailure'."
  },
  {
    step: 7,
    ev: "Monitor StartTransaction.req for 10 seconds",
    evse: "No StartTransaction.req expected",
    description: "Monitor for StartTransaction.req during 10 seconds. Verify that StartTransaction.req does NOT occur during the test."
  }
];

