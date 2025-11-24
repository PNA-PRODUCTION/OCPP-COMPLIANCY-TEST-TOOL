// TC_040_2_CS: Configuration key - Invalid value
export const TC_040_2_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send ChangeConfiguration.req (key = MeterValueSampleInterval, value = -1)",
    evse: "Send ChangeConfiguration.conf (status = Rejected) OR CALLERROR",
    description: "Send ChangeConfiguration.req with key 'MeterValueSampleInterval' and value '-1' (invalid value). Verify that ChangeConfiguration.conf is received with status 'Rejected' OR CALLERROR is received with ErrorCode 'PropertyConstraintViolation'."
  }
];

