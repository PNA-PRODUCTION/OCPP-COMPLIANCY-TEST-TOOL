// TC_042_2_CS: Get Local List Version (empty)
export const TC_042_2_CS_SEQUENCE = [
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
    description: "Send GetConfiguration.req with key 'SupportedFeatureProfiles'. Verify that GetConfiguration.conf is received and contains SupportedFeatureProfiles value. Check if 'LocalAuthListManagement' is included in SupportedFeatureProfiles. If LocalAuthListManagement is included, proceed with the test. If LocalAuthListManagement is not included, show error message: 'Please proceed with TC_042_1_CS test case.'"
  },
  {
    step: 3,
    ev: "Send GetConfiguration.req (key = LocalAuthListEnabled)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'LocalAuthListEnabled'. Verify that GetConfiguration.conf is received and contains LocalAuthListEnabled value. Record the original value. If value is true, skip step 4."
  },
  {
    step: 4,
    ev: "Send ChangeConfiguration.req (LocalAuthListEnabled = true)",
    evse: "Send ChangeConfiguration.conf",
    description: "If LocalAuthListEnabled is not true, send ChangeConfiguration.req to set it to true. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  },
  {
    step: 5,
    ev: "Send SendLocalList.req (listVersion = 1, updateType = Full)",
    evse: "Send SendLocalList.conf",
    description: "Send SendLocalList.req with listVersion = 1 and updateType = 'Full'. Verify that SendLocalList.conf is received with status 'Accepted'."
  },
  {
    step: 6,
    ev: "Send GetLocalListVersion.req",
    evse: "Send GetLocalListVersion.conf",
    description: "Send GetLocalListVersion.req. Verify that GetLocalListVersion.conf is received with ListVersion = 0."
  },
  {
    step: 7,
    ev: "Send ChangeConfiguration.req (LocalAuthListEnabled = original)",
    evse: "Send ChangeConfiguration.conf",
    description: "Send ChangeConfiguration.req to restore LocalAuthListEnabled to original value. Verify that ChangeConfiguration.conf is received with status 'Accepted'."
  }
];

