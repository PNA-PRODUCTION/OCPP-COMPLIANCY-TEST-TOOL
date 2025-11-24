// TC_054_CS: Trigger Message
export const TC_054_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send TriggerMessage.req (requestedMessage = MeterValues, connectorId = 1)",
    evse: "Send TriggerMessage.conf",
    description: "Send TriggerMessage.req with requestedMessage='MeterValues' and connectorId=1. Verify that TriggerMessage.conf is received with status 'Accepted'."
  },
  {
    step: 3,
    ev: "Send MeterValues.req",
    evse: "Receive MeterValues.req",
    description: "Verify that MeterValues.req is received within 5 seconds."
  },
  {
    step: 4,
    ev: "Send TriggerMessage.req (requestedMessage = Heartbeat)",
    evse: "Send TriggerMessage.conf",
    description: "Send TriggerMessage.req with requestedMessage='Heartbeat'. Verify that TriggerMessage.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received within 5 seconds."
  },
  {
    step: 6,
    ev: "Send TriggerMessage.req (requestedMessage = StatusNotification, connectorId = 1)",
    evse: "Send TriggerMessage.conf",
    description: "Send TriggerMessage.req with requestedMessage='StatusNotification' and connectorId=1. Verify that TriggerMessage.conf is received with status 'Accepted'."
  },
  {
    step: 7,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req",
    description: "Verify that StatusNotification.req is received within 5 seconds."
  },
  {
    step: 8,
    ev: "Send TriggerMessage.req (requestedMessage = DiagnosticsStatusNotification)",
    evse: "Send TriggerMessage.conf",
    description: "Send TriggerMessage.req with requestedMessage='DiagnosticsStatusNotification'. Verify that TriggerMessage.conf is received with status 'Accepted'."
  },
  {
    step: 9,
    ev: "Send DiagnosticsStatusNotification.conf (empty)",
    evse: "Send DiagnosticsStatusNotification.req",
    description: "Verify that DiagnosticsStatusNotification.req is received within 5 seconds. Verify that status is 'Idle'."
  },
  {
    step: 10,
    ev: "Send TriggerMessage.req (requestedMessage = FirmwareStatusNotification)",
    evse: "Send TriggerMessage.conf",
    description: "Send TriggerMessage.req with requestedMessage='FirmwareStatusNotification'. Verify that TriggerMessage.conf is received with status 'Accepted' or 'NotImplemented'."
  },
  {
    step: 11,
    ev: "Send FirmwareStatusNotification.conf (empty)",
    evse: "Send FirmwareStatusNotification.req",
    description: "Verify that FirmwareStatusNotification.req is received within 5 seconds. Verify that status is 'Idle'."
  }
];

