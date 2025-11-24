// TC_042_1_CS: Get Local List Version (not supported)
export const TC_042_1_CS_SEQUENCE = [
  {
    step: 1,
    ev: "Send Heartbeat.conf",
    evse: "Send Heartbeat.req",
    description: "Verify that Heartbeat.req is received from Charge Point after server starts."
  },
  {
    step: 2,
    ev: "Send GetConfiguration.req (key = SupportedFeatureProfiles)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'SupportedFeatureProfiles'. Verify that GetConfiguration.conf is received and contains SupportedFeatureProfiles value. Check if 'LocalAuthListManagement' is included in SupportedFeatureProfiles. If LocalAuthListManagement is not included, proceed with the test. If LocalAuthListManagement is included, show error message: 'Please proceed with TC_042_2_CS test case.'"
  },
  {
    step: 3,
    ev: "Send GetLocalListVersion.req",
    evse: "Send GetLocalListVersion.conf (ListVersion = -1) OR CALLERROR",
    description: "Send GetLocalListVersion.req. Verify that GetLocalListVersion.conf is received with ListVersion = -1 OR CALLERROR is received with ErrorCode 'NotSupported'."
  }
];

