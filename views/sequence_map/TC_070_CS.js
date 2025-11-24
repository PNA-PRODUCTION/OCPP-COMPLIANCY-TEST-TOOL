// TC_070_CS: Sampled Meter Values
export const TC_070_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send GetConfiguration.req (key = MeterValueSampleInterval)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'MeterValueSampleInterval'. Verify that GetConfiguration.conf is received and contains MeterValueSampleInterval value. Record the original value."
  },
  {
    step: 3,
    ev: "Send ChangeConfiguration.req (MeterValueSampleInterval = 15)",
    evse: "Send ChangeConfiguration.conf",
    description: "If MeterValueSampleInterval is not 15, send ChangeConfiguration.req to set it to 15. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If MeterValueSampleInterval is already 15, skip this step."
  },
  {
    step: 4,
    ev: "Send GetConfiguration.req (key = ClockAlignedDataInterval)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'ClockAlignedDataInterval'. Verify that GetConfiguration.conf is received and contains ClockAlignedDataInterval value. Record the original value."
  },
  {
    step: 5,
    ev: "Send ChangeConfiguration.req (ClockAlignedDataInterval = 0)",
    evse: "Send ChangeConfiguration.conf",
    description: "If ClockAlignedDataInterval is not 0, send ChangeConfiguration.req to set it to 0. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If ClockAlignedDataInterval is already 0, skip this step."
  },
  {
    step: 6,
    ev: "Send GetConfiguration.req (key = MeterValuesSampledData)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'MeterValuesSampledData'. Verify that GetConfiguration.conf is received and contains MeterValuesSampledData value."
  },
  {
    step: 7,
    ev: "Send GetConfiguration.req (key = AuthorizeRemoteTxRequests)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'AuthorizeRemoteTxRequests'. Verify that GetConfiguration.conf is received and contains AuthorizeRemoteTxRequests value."
  },
  {
    step: 8,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
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
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as RemoteStartTransaction.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 12,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  },
  {
    step: 13,
    ev: "Send MeterValues.req (3 messages)",
    evse: "Receive MeterValues.req",
    description: "Verify that 3 MeterValues.req messages are received. Verify that MeterValues interval is 15 seconds (tolerance ±1 second). Verify that MeterValuesSampledData configured values are included. If MeterValuesSampledData value is empty, verify that default Energy.Active.Import.Register value is included. Verify that sampledValue.context is 'Sample.Periodic'."
  },
  {
    step: 14,
    ev: "Send RemoteStopTransaction.req",
    evse: "Send RemoteStopTransaction.conf",
    description: "Send RemoteStopTransaction.req with valid transactionId. Verify that RemoteStopTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 15,
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (reason = Remote)",
    description: "Verify that StopTransaction.req is received with reason 'Remote'. Verify that StopTransaction.req contains the same IdTag as StartTransaction.req. Verify that StopTransaction.conf is received with status 'Accepted'. Note: Step 15 and 16 can be in different order."
  },
  {
    step: 16,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Finishing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Finishing'. Note: Step 15 and 16 can be in different order."
  },
  {
    step: 17,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  },
  {
    step: 18,
    ev: "Send ChangeConfiguration.req (MeterValueSampleInterval = original)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to restore MeterValueSampleInterval to original value. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 19,
    ev: "Send ChangeConfiguration.req (ClockAlignedDataInterval = original)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to restore ClockAlignedDataInterval to original value. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  }
];

