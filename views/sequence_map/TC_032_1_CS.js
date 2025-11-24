// TC_032_1_CS: Power failure boot charging point - configured to stop transaction(s) before going down
export const TC_032_1_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  },
  {
    step: 3,
    ev: "Send RemoteStartTransaction.req",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with a valid IdTag. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 4,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req",
    description: "Verify that StartTransaction.req is received with the same IdTag as RemoteStartTransaction.req. Verify that StartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  },
  {
    step: 6,
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (reason = PowerLoss)",
    description: "Verify that StopTransaction.req is received with reason 'PowerLoss'. Verify that StopTransaction.req contains the same IdTag as StartTransaction.req. Verify that StopTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 7,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Finishing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Finishing'."
  },
  {
    step: 8,
    ev: "Send BootNotification.conf",
    evse: "Send BootNotification.req",
    description: "Verify that BootNotification.req is received from Charge Point after power restoration. Verify that BootNotification.conf is received with status 'Accepted'."
  },
  {
    step: 9,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Preparing)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Preparing'."
  }
];

