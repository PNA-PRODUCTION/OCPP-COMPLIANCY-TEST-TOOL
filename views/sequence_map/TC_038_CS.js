// TC_038_CS: Offline Stop Transaction
export const TC_038_CS_SEQUENCE = [
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
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
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
    description: "If AuthorizeRemoteTxRequests is true, verify that Authorize.req is received with a valid IdTag. Verify that Authorize.conf is received with status 'Accepted'. If AuthorizeRemoteTxRequests is false, skip this step."
  },
  {
    step: 6,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as RemoteStartTransaction.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 7,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  },
  {
    step: 8,
    ev: "Send MeterValues.req (2 messages)",
    evse: "Receive MeterValues.req",
    description: "Verify that 2 MeterValues.req messages are received. Verify that MeterValues interval matches configured interval (tolerance ±1 second). Verify that sampledValue.context is 'Sample.Periodic'. Force Test ResetTimer to 80 seconds for reconnection test."
  },
  {
    step: 9,
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (reason = Local)",
    description: "Verify that StopTransaction.req is received with reason 'Local'. Verify that StopTransaction.req contains the same IdTag as StartTransaction.req. Verify that StopTransaction.conf is received with status 'Accepted'. Note: Step 9 and 10 can be in different order."
  },
  {
    step: 10,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Finishing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Finishing'. Note: Step 9 and 10 can be in different order."
  },
  {
    step: 11,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  }
];

