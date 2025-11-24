// TC_023_CS: Start Charging Session - Authorize invalid
export const TC_023_CS_SEQUENCE = [
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
    description: "Send GetConfiguration.req with key 'MinimumStatusDuration'. Verify that GetConfiguration.conf is received and contains MinimumStatusDuration value. Record the original value."
  },
  {
    step: 3,
    ev: "Send ChangeConfiguration.req (MinimumStatusDuration = 10)",
    evse: "Send ChangeConfiguration.conf",
    description: "If MinimumStatusDuration is not 10, send ChangeConfiguration.req to set it to 10. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If MinimumStatusDuration is already 10, skip this step."
  },
  {
    step: 4,
    ev: "Send GetConfiguration.req (key = LocalPreAuthorize)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'LocalPreAuthorize'. Verify that GetConfiguration.conf is received and contains LocalPreAuthorize value."
  },
  {
    step: 5,
    ev: "Send ChangeConfiguration.req (LocalPreAuthorize = true)",
    evse: "Send ChangeConfiguration.conf",
    description: "If LocalPreAuthorize is not true, send ChangeConfiguration.req to set it to true. Verify that ChangeConfiguration.conf is received with status 'Accepted'. If LocalPreAuthorize is already true, skip this step."
  },
  {
    step: 6,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req (invalid IdTag)",
    description: "Verify that Authorize.req is received with an invalid IdTag (not in config.json inValidate_ID_Tag). Verify that Authorize.conf is received with status other than 'Accepted'."
  },
  {
    step: 7,
    ev: "Wait for 20 seconds",
    evse: "Monitor StartTransaction.req",
    description: "Monitor for StartTransaction.req during 20 seconds. Verify that StartTransaction.req does NOT occur within 20 seconds."
  },
  {
    step: 8,
    ev: "Send ChangeConfiguration.req (MinimumStatusDuration = original)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to restore MinimumStatusDuration to original value. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  }
];

