// TC_021_CS: Change/set Configuration
export const TC_021_CS_SEQUENCE = [
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
    ev: "Send ChangeConfiguration.req (MeterValueSampleInterval = original + 10)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to set MeterValueSampleInterval to (original value + 10). Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send GetConfiguration.req (key = MeterValueSampleInterval)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'MeterValueSampleInterval'. Verify that GetConfiguration.conf is received and contains the changed value (original value + 10)."
  },
  {
    step: 5,
    ev: "Send ChangeConfiguration.req (MeterValueSampleInterval = original)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to restore MeterValueSampleInterval to original value. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  }
];

