// TC_005_3_CS: EV Side Disconnected - StopTransactionOnEVSideDisconnect = false - UnlockConnectorOnEVSideDisconnect = false
export const TC_005_3_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send GetConfiguration.req (key = MinimumStatusDuration)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'MinimumStatusDuration'. Verify that GetConfiguration.conf is received and contains MinimumStatusDuration value. If value is not 0, send ChangeConfiguration.req to set it to 0."
  },
  {
    step: 3,
    ev: "Send ChangeConfiguration.req (MinimumStatusDuration = 0)",
    evse: "Send ChangeConfiguration.conf",
    description: "If MinimumStatusDuration was not 0, verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send GetConfiguration.req (key = StopTransactionOnEVSideDisconnect)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'StopTransactionOnEVSideDisconnect'. Verify that GetConfiguration.conf is received and contains StopTransactionOnEVSideDisconnect value. If value is not false, send ChangeConfiguration.req to set it to false."
  },
  {
    step: 5,
    ev: "Send ChangeConfiguration.req (StopTransactionOnEVSideDisconnect = false)",
    evse: "Send ChangeConfiguration.conf",
    description: "If StopTransactionOnEVSideDisconnect was not false, verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 6,
    ev: "Send GetConfiguration.req (key = UnlockConnectorOnEVSideDisconnect)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'UnlockConnectorOnEVSideDisconnect'. Verify that GetConfiguration.conf is received and contains UnlockConnectorOnEVSideDisconnect value. If value is not false, send ChangeConfiguration.req to set it to false."
  },
  {
    step: 7,
    ev: "Send ChangeConfiguration.req (UnlockConnectorOnEVSideDisconnect = false)",
    evse: "Send ChangeConfiguration.conf",
    description: "If UnlockConnectorOnEVSideDisconnect was not false, verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 8,
    ev: "Send GetConfiguration.req (key = AuthorizeRemoteTxRequests)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'AuthorizeRemoteTxRequests'. Verify that GetConfiguration.conf is received and contains AuthorizeRemoteTxRequests value."
  },
  {
    step: 9,
    ev: "Send RemoteStartTransaction.req",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with a valid IdTag. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 10,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req",
    description: "If AuthorizeRemoteTxRequests is true, verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'. If AuthorizeRemoteTxRequests is false, skip this step."
  },
  {
    step: 11,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  },
  {
    step: 12,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as RemoteStartTransaction.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 13,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  },
  {
    step: 14,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = SuspendedEVSE or SuspendedEV)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'SuspendedEVSE' or 'SuspendedEV'."
  },
  {
    step: 15,
    ev: "Send RemoteStopTransaction.req",
    evse: "Send RemoteStopTransaction.conf",
    description: "Send RemoteStopTransaction.req with valid transactionId. Verify that RemoteStopTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 16,
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (reason = Remote)",
    description: "Verify that StopTransaction.req is received with reason 'Remote'. Verify that StopTransaction.req contains the same IdTag as StartTransaction.req. Verify that StopTransaction.conf is received with status 'Accepted'. Note: Step 16 and 17 can be in different order."
  },
  {
    step: 17,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Finishing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Finishing'. Note: Step 16 and 17 can be in different order."
  },
  {
    step: 18,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Available'."
  }
];

