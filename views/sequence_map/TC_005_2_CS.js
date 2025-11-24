// TC_005_2_CS: EV Side Disconnected - StopTransactionOnEVSideDisconnect = true - UnlockConnectorOnEVSideDisconnect = false
export const TC_005_2_CS_SEQUENCE = [
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
    description: "Send GetConfiguration.req with key 'StopTransactionOnEVSideDisconnect'. Verify that GetConfiguration.conf is received and contains StopTransactionOnEVSideDisconnect value. If value is not true, send ChangeConfiguration.req to set it to true."
  },
  {
    step: 5,
    ev: "Send ChangeConfiguration.req (StopTransactionOnEVSideDisconnect = true)",
    evse: "Send ChangeConfiguration.conf",
    description: "If StopTransactionOnEVSideDisconnect was not true, verify that ChangeConfiguration.conf is received with status 'Accepted'."
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
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (reason = EVDisconnected)",
    description: "Verify that StopTransaction.req is received with reason 'EVDisconnected'. Verify that StopTransaction.req contains the same IdTag as StartTransaction.req. Verify that StopTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 15,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Finishing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Finishing'."
  },
  {
    step: 16,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Available)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Available'."
  },
  {
    step: 17,
    ev: "Send UnlockConnector.req",
    evse: "Send UnlockConnector.conf",
    description: "Send UnlockConnector.req with connectorId > 0. Verify that UnlockConnector.conf is received with status 'Unlocked' or 'NotSupported'."
  }
];

