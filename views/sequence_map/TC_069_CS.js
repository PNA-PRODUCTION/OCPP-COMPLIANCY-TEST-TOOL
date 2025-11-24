// TC_069_CS: Stop transaction - ParentIdTag in StopTransaction matches ParentIdTag in StartTransaction
export const TC_069_CS_SEQUENCE = [
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
    ev: "Send RemoteStartTransaction.req (idTag1)",
    evse: "Send RemoteStartTransaction.conf",
    description: "Send RemoteStartTransaction.req with valid idTag1. Verify that RemoteStartTransaction.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req (idTag1)",
    description: "If AuthorizeRemoteTxRequests is true, verify that Authorize.req is received with idTag1. Verify that Authorize.conf is received with status 'Accepted'. Store Authorize.conf.idTagInfo.parentIdTag value (only for TC_069_CS: parentIdTag value from Authorize.conf). If AuthorizeRemoteTxRequests is false, skip this step."
  },
  {
    step: 6,
    ev: "Send StartTransaction.conf",
    evse: "Send StartTransaction.req (idTag1)",
    description: "Verify that StartTransaction.req is received with idTag = idTag1. Verify that StartTransaction.conf is received with status 'Accepted'. Store StartTransaction.conf.idTagInfo.parentIdTag value (only for TC_069_CS: parentIdTag value from StartTransaction.conf). This value becomes the reference parentIdTag."
  },
  {
    step: 7,
    ev: "Send StatusNotification.conf (empty)",
    evse: "Send StatusNotification.req (status = Charging)",
    description: "Verify that StatusNotification.req is received with connectorId > 0. Verify that status is 'Charging'."
  },
  {
    step: 8,
    ev: "Send Authorize.conf",
    evse: "Send Authorize.req (idTag2)",
    description: "Verify that Authorize.req is received with idTag2. Verify that Authorize.conf is received with status 'Accepted'. Verify that Authorize.conf.idTagInfo.parentIdTag matches idTag1's parentIdTag (only for TC_069_CS: parentIdTag value from Authorize.conf)."
  },
  {
    step: 9,
    ev: "Send StopTransaction.conf",
    evse: "Send StopTransaction.req (idTag2)",
    description: "Verify that StopTransaction.req is received with idTag = idTag2. Verify that StopTransaction.conf is received with status 'Accepted'. Note: Step 9 and 10 can be in different order."
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

