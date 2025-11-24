// TC_062_CS: Data Transfer to a Charge Point
export const TC_062_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send DataTransfer.req (vendorId = TestVendorId)",
    evse: "Send DataTransfer.conf",
    description: "Send DataTransfer.req with vendorId='TestVendorId' and temporary data. Verify that DataTransfer.conf is received within 5 seconds. Verify that status is 'Rejected' OR 'UnknownMessageId' OR 'UnknownVendorId'."
  }
];

