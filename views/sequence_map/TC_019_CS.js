// TC_019_CS: Retrieve configuration
export const TC_019_CS_SEQUENCE = [
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
    description: "Send GetConfiguration.req with key 'SupportedFeatureProfiles'. Verify that GetConfiguration.conf is received and contains SupportedFeatureProfiles value. Verify that configurationKey.key is 'SupportedFeatureProfiles'. Verify that the value is a combination of: 'Core, LocalAuthListManagement, SmartCharging, FirmwareManagement, Reservation, RemoteTrigger'. Verify that readonly is true."
  },
  {
    step: 3,
    ev: "Send GetConfiguration.req (empty key list)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with empty key list. Verify that GetConfiguration.conf is received. If 'Core' is included in SupportedFeatureProfiles, verify the existence and validity of Core-related configuration items (check if values match their types). If 'LocalAuthListManagement' is included in SupportedFeatureProfiles, verify the existence and validity of LocalAuthListManagement-related configuration items. If 'SmartCharging' is included in SupportedFeatureProfiles, verify the existence and validity of SmartCharging-related configuration items."
  },
  {
    step: 4,
    ev: "Send GetConfiguration.req (key = GetConfigurationMaxKeys)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req with key 'GetConfigurationMaxKeys'. Verify that GetConfiguration.conf is received and contains GetConfigurationMaxKeys value. Verify that the value is greater than or equal to 1."
  },
  {
    step: 5,
    ev: "Send GetConfiguration.req (all available keys)",
    evse: "Send GetConfiguration.conf",
    description: "Send GetConfiguration.req requesting all available keys at once without exceeding GetConfigurationMaxKeys value. Verify that responses for all requested keys are received."
  }
];

