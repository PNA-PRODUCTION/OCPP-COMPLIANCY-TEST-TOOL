// TC_034_CS: Power Failure with Unavailable Status
export const TC_034_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send ChangeAvailability.req (connectorId = 0, type = Inoperative)",
    evse: "Send ChangeAvailability.conf",
    description: "Send ChangeAvailability.req with connectorId=0 and type='Inoperative'. Verify that ChangeAvailability.conf is received with status 'Accepted'. Only report for changed connectorID 0."
  },
  {
    step: 3,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (connectorId = 0, status = Unavailable)",
    description: "Verify that StatusNotification.req is received with connectorId = 0. Verify that status is 'Unavailable'. Verify that StatusNotification.req is received with connectorId = 1 and status = 'Unavailable'."
  },
  {
    step: 4,
    ev: "Send BootNotification.conf",
    evse: "Send BootNotification.req",
    description: "Verify that BootNotification.req is received from Charge Point after reboot."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (connectorId = 0, status = Unavailable)",
    description: "Verify that StatusNotification.req is received with connectorId = 0. Verify that status is 'Unavailable'. Verify that StatusNotification.req is received with connectorId = 1 and status = 'Unavailable'."
  },
  {
    step: 6,
    ev: "Send ChangeAvailability.req (connectorId = 0, type = Operative)",
    evse: "Send ChangeAvailability.conf",
    description: "Send ChangeAvailability.req with connectorId=0 and type='Operative'. Verify that ChangeAvailability.conf is received with status 'Accepted'."
  },
  {
    step: 7,
    ev: "Send ChangeAvailability.req (connectorId = 1, type = Operative)",
    evse: "Send ChangeAvailability.conf",
    description: "Send ChangeAvailability.req with connectorId=1 and type='Operative'. Verify that ChangeAvailability.conf is received with status 'Accepted'."
  },
  {
    step: 8,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (Final Status)",
    description: "Verify that StatusNotification.req is received with connectorId = 0. Verify that status is 'Available'. Verify that StatusNotification.req is received with connectorId = 1. Verify that status is 'Available' or 'Preparing'."
  }
];

